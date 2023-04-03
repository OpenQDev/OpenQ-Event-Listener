/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OnlyOpenQ,
  OnlyOpenQInterface,
} from "../../../contracts/OnlyOpenQ/OnlyOpenQ";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "openQ",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class OnlyOpenQ__factory {
  static readonly abi = _abi;
  static createInterface(): OnlyOpenQInterface {
    return new utils.Interface(_abi) as OnlyOpenQInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OnlyOpenQ {
    return new Contract(address, _abi, signerOrProvider) as OnlyOpenQ;
  }
}
