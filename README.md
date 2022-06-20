## Getting Started

* run `yarn start`
  * prints existing events
  * listens to new events
* deploy the contracts locally from `OpenQ-Contracts repo`
  * `yarn deploy:localhost`
* open hardhat console in the `OpenQ-Contracts` repo
  * `yarn hardhat console --network localhost`
* mint a new bounty
    * load the provider
      * `provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545')`

    * load the artifact
      * `artifact = require('artifacts/contracts/OpenQ/Implementations/OpenQV0.sol/OpenQV0.json')`

    * load the contract
      * `openQ = new ethers.Contract('0xAddress', artifact.abi, provider)`

    * mint a new bounty
      * `openQ.mintBounty('123', 'abc')`

## Hardhat Console

```bash
npx hardhat console --network localhost
```

```
let OpenQV0 = await ethers.getContractFactory("OpenQV0");let openq = await OpenQV0.attach('0x5FC8d32690cc91D4c39d9d3abcBD16989F875707');let txn = await openq.mintBounty('sdf','sdf')
```