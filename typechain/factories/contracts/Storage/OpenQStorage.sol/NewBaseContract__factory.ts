/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  NewBaseContract,
  NewBaseContractInterface,
} from "../../../../contracts/Storage/OpenQStorage.sol/NewBaseContract";

const _abi = [
  {
    inputs: [],
    name: "foo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_foo",
        type: "uint256",
      },
    ],
    name: "setFoo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b18061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063c2985578146037578063dc80035d146051575b600080fd5b603f60005481565b60405190815260200160405180910390f35b6061605c3660046063565b600055565b005b600060208284031215607457600080fd5b503591905056fea264697066735822122074997697cbf212d691301e2e6c67337139d4b638eb0d9786d68a1c2e3522201b64736f6c634300080d0033";

type NewBaseContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NewBaseContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NewBaseContract__factory extends ContractFactory {
  constructor(...args: NewBaseContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NewBaseContract> {
    return super.deploy(overrides || {}) as Promise<NewBaseContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NewBaseContract {
    return super.attach(address) as NewBaseContract;
  }
  override connect(signer: Signer): NewBaseContract__factory {
    return super.connect(signer) as NewBaseContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NewBaseContractInterface {
    return new utils.Interface(_abi) as NewBaseContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NewBaseContract {
    return new Contract(address, _abi, signerOrProvider) as NewBaseContract;
  }
}
