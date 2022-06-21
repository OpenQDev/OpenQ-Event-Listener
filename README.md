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

You can interact directly with the contracts without going through the frontend with the Hardhat Console.

### Connect Hardhat Console to localhost

From the `OpenQ-Contracts` root directory run:

```bash
npx hardhat console --network localhost
```

### Connect to Contracts

```
OpenQV0 = await ethers.getContractFactory("OpenQV0");openq = await OpenQV0.attach('0x5FC8d32690cc91D4c39d9d3abcBD16989F875707');
```

### Mint Bounty

```
txn = await openq.mintBounty((Math.random(1) * 100).toString(),'sdf');txnReceipt = await txn.wait();bountyCreatedEvent = txnReceipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;bountyId = bountyCreatedEvent.args.bountyId;console.log('Bounty Address:', bountyAddress);
```

### Fund Bounty

```
txn = await openq.fundBountyToken(bountyId, ethers.constants.AddressZero, 1000000, 1, { value: ethers.BigNumber.from('1000000000000000000') });depositId = (await txn.wait()).events[0].args.depositId;
```

### Refund Bounty

```
txn = await openq.refundDeposit(bountyId, depositId);
```

### One Liner Refund

```
OpenQV0 = await ethers.getContractFactory("OpenQV0");openq = await OpenQV0.attach('0x5FC8d32690cc91D4c39d9d3abcBD16989F875707');txn = await openq.mintBounty((Math.random(1) * 100).toString(),'sdf');txnReceipt = await txn.wait();bountyCreatedEvent = txnReceipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;bountyId = bountyCreatedEvent.args.bountyId;console.log('Bounty Address:', bountyAddress);txn = await openq.fundBountyToken(bountyId, ethers.constants.AddressZero, 1000000, 1, { value: ethers.BigNumber.from('1000000000000000000') });depositId = (await txn.wait()).events[0].args.depositId;txn = await openq.refundDeposit(bountyId, depositId);
```