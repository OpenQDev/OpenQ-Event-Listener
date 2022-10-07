## 

provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["address", "uint256"], ['0x5FbDB2315678afecb367f032d93F642f64180aa3', '100']);ongoingBountyInitOperation = [1, abiEncodedParams];txn = await openQ.mintBounty((Math.random(1)*100).toString(), 'abc', ongoingBountyInitOperation);receipt = await txn.wait();console.log(receipt);receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});


## Hardhat Console

You can interact directly with the contracts without going through the frontend with the Hardhat Console.

### Connect Hardhat Console to localhost

From the `OpenQ-Contracts` root directory run:

```bash
npx hardhat console --network localhost
```

### Claim Manager

artifactClaimManager = require('./artifacts/contracts/ClaimManager/ClaimManager.sol/ClaimManager.json');claimManager = new ethers.Contract('0xa513E6E4b8f2a923D98304ec87F64353C4D5C853', artifactClaimManager.abi, provider.getSigner());

### Deposit Manager

artifactDepositManager = require('./artifacts/contracts/DepositManager/DepositManager.sol/DepositManager.json');depositManager = new ethers.Contract('0x610178dA211FEF7D417bC0e6FeD39F05609AD788', artifactDepositManager.abi, provider.getSigner());

### All Contract Setup

provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());artifactDepositManager = require('./artifacts/contracts/DepositManager/DepositManager.sol/DepositManager.json');depositManager = new ethers.Contract('0x610178dA211FEF7D417bC0e6FeD39F05609AD788', artifactDepositManager.abi, provider.getSigner());artifactClaimManager = require('./artifacts/contracts/ClaimManager/ClaimManager.sol/ClaimManager.json');claimManager = new ethers.Contract('0xa513E6E4b8f2a923D98304ec87F64353C4D5C853', artifactClaimManager.abi, provider.getSigner());

### Mint Bounty

ATOMIC WITH FUNDING GOAL

```
abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["bool", "address", "uint256"], [true, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", '100']);bountyInitOperation = [0, abiEncodedParams];txn = await openQ.mintBounty(id = (Math.random(1)*100).toString(), 'abc', bountyInitOperation);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});console.log(id);bountyCreatedEvent = receipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;console.log('Bounty Address:', bountyAddress.toLowerCase());
```

### Fund Bounty

```
txn = await depositManager.fundBountyToken(bountyAddress, ethers.constants.AddressZero, 1000000, 1, { value: ethers.BigNumber.from('1000000000000000000') });depositId = (await txn.wait()).events[0].args.depositId;
```

### Refund Deposit

```
txn = await depositManager.refundDeposit(bountyAddress, depositId);
```

### Claim

```
abiCoder = new ethers.utils.AbiCoder;closerParams=abiCoder.encode(['address','string','address','string'], [bountyAddress, "FlacoJones", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://github.com/OpenQDev/OpenQ-Frontend/pull/398"]);txn = await claimManager.claimBounty(bountyAddress, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", closerParams);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});claimEvent = receipt.events.find(eventObj => eventObj.event === 'ClaimSuccess');
```

### One Liner Claim

```
provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');artifact = require('./artifacts/contracts/OpenQ/Implementations/OpenQV1.sol/OpenQV1.json');openQ = new ethers.Contract('0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9', artifact.abi, provider.getSigner());artifactClaimManager = require('./artifacts/contracts/ClaimManager/ClaimManager.sol/ClaimManager.json');claimManager = new ethers.Contract('0xa513E6E4b8f2a923D98304ec87F64353C4D5C853', artifactClaimManager.abi, provider.getSigner());artifactDepositManager = require('./artifacts/contracts/DepositManager/DepositManager.sol/DepositManager.json');depositManager = new ethers.Contract('0x610178dA211FEF7D417bC0e6FeD39F05609AD788', artifactDepositManager.abi, provider.getSigner());abiCoder = new ethers.utils.AbiCoder;abiEncodedParams = abiCoder.encode(["address", "uint256"], [ethers.constants.AddressZero, '100']);ongoingBountyInitOperation = [1, abiEncodedParams];txn = await openQ.mintBounty(id = (Math.random(1)*100).toString(), 'abc', ongoingBountyInitOperation);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});console.log(id);bountyCreatedEvent = receipt.events.find(eventObj => eventObj.event === 'BountyCreated');bountyAddress = bountyCreatedEvent.args.bountyAddress;console.log('Bounty Address:', bountyAddress.toLowerCase());txn = await depositManager.fundBountyToken(id, ethers.constants.AddressZero, 1000000, 1, { value: ethers.BigNumber.from('1000000000000000000') });depositId = (await txn.wait()).events[0].args.depositId;abiCoder = new ethers.utils.AbiCoder;closerParams=abiCoder.encode(["tuple(address,string,address,string)"], [[bountyAddress, "FlacoJones", "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "https://github.com/OpenQDev/OpenQ-Frontend/pull/398"]]);txn = await claimManager.claimBounty(id, "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", closerParams);receipt = await txn.wait();receipt.events.forEach(event => {console.log(event.eventSignature);console.log(event.args);});claimEvent = receipt.events.find(eventObj => eventObj.event === 'ClaimSuccess');
```