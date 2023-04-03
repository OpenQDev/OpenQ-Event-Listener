/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKycValidity,
  IKycValidityInterface,
} from "../../../contracts/KYC/IKycValidity";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "hasValidToken",
    outputs: [
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IKycValidity__factory {
  static readonly abi = _abi;
  static createInterface(): IKycValidityInterface {
    return new utils.Interface(_abi) as IKycValidityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKycValidity {
    return new Contract(address, _abi, signerOrProvider) as IKycValidity;
  }
}
