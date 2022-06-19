* run `yarn ts-node src/index.ts`
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
