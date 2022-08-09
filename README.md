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
      * `provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');`

    * load the artifact
      * `artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');`

    * load the contract
      * `openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());`

		* get mint data
			* `abiCoder = new ethers.utils.AbiCoder;`
			* `abiEncodedParams = abiCoder.encode(["address", "uint256"], ['0x5FbDB2315678afecb367f032d93F642f64180aa3', '100']);`
			* `ongoingBountyInitOperation = [1, abiEncodedParams];`

    * mint a new bounty
      * `await openQ.mintBounty((Math.random(1)*100).toString(), 'abc', ongoingBountyInitOperation);`

##
provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["address", "uint256"], ['0x5FbDB2315678afecb367f032d93F642f64180aa3', '100']);ongoingBountyInitOperation = [1, abiEncodedParams];txn = await openQ.mintBounty((Math.random(1)*100).toString(), 'abc', ongoingBountyInitOperation);receipt = await txn.wait();console.log(receipt);receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});


## Hardhat Console

You can interact directly with the contracts without going through the frontend with the Hardhat Console.

### Connect Hardhat Console to localhost

From the `OpenQ-Contracts` root directory run:

```bash
npx hardhat console --network localhost
```

### Mint Bounty

FUNDING GOAL

```
provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["address", "uint256"], ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", '100']);bountyInitOperation = [3, abiEncodedParams];txn = await openQ.mintBounty(id = (Math.random(1)*100).toString(), 'abc', bountyInitOperation);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});console.log(id);bountyCreatedEvent = receipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;console.log('Bounty Address:', bountyAddress.toLowerCase());
```

ONGOING

```
provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["address", "uint256"], ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", '100']);bountyInitOperation = [1, abiEncodedParams];txn = await openQ.mintBounty(id = (Math.random(1)*100).toString(), 'abc', bountyInitOperation);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});console.log(id);bountyCreatedEvent = receipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;console.log('Bounty Address:', bountyAddress.toLowerCase());
```

TIERED

```
provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["uint256[]"], [[80,20]]);bountyInitOperation = [2, abiEncodedParams];txn = await openQ.mintBounty(id = (Math.random(1)*100).toString(), 'abc', bountyInitOperation);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});console.log(id);bountyCreatedEvent = receipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;console.log('Bounty Address:', bountyAddress.toLowerCase());
```

### Fund Bounty

```
txn = await openQ.fundBountyToken(id, ethers.constants.AddressZero, 1000000, 1, { value: ethers.BigNumber.from('1000000000000000000') });depositId = (await txn.wait()).events[0].args.depositId;
```

### Refund Bounty

```
txn = await openQ.refundDeposit(id, depositId);
```

### Claim Ongoing

```
abiCoder = new ethers.utils.AbiCoder;closerParams=abiCoder.encode([('address','string','address','string')], [bountyAddress, "FlacoJones", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://github.com/OpenQDev/OpenQ-Frontend/pull/398"]);

txn = await openQ.claimBounty(id, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", closerParams);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});claimEvent = receipt.events.find(eventObj => eventObj.event === 'ClaimSuccess');
```

### One Liner Claim

```
provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["address", "uint256"], [ethers.constants.AddressZero, '100']);ongoingBountyInitOperation = [1, abiEncodedParams];txn = await openQ.mintBounty(id = (Math.random(1)*100).toString(), 'abc', ongoingBountyInitOperation);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});console.log(id);bountyCreatedEvent = receipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;console.log('Bounty Address:', bountyAddress.toLowerCase());txn = await openQ.fundBountyToken(id, ethers.constants.AddressZero, 1000000, 1, { value: ethers.BigNumber.from('1000000000000000000') });depositId = (await txn.wait()).events[0].args.depositId;abiCoder = new ethers.utils.AbiCoder;closerParams=abiCoder.encode(["tuple(address,string,address,string)"], [[bountyAddress, "FlacoJones", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://github.com/OpenQDev/OpenQ-Frontend/pull/398"]]);txn = await openQ.claimBounty(id, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", closerParams);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});claimEvent = receipt.events.find(eventObj => eventObj.event === 'ClaimSuccess');
```