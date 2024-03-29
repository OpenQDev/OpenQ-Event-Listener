/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOpenQ,
  IOpenQInterface,
} from "../../../../contracts/OpenQ/Interfaces/IOpenQ";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "closer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyClosedTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "BountyClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "bountyId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organization",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyMintTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "BountyCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "newExternalUserId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "formerExternalUserId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "formerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "ExternalUserIdAssociatedWithAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fundingGoalTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundingGoalVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "FundingGoalSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "InvoiceCompleteSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "invoiceRequired",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "InvoiceRequiredSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "kycRequired",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "KYCRequiredSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payoutTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "payoutSchedule",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "PayoutScheduleSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "payoutTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payoutTokenVolume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "PayoutSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "SupportingDocumentsCompleteSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "supportingDocuments",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bountyType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "SupportingDocumentsRequiredSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "claimant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "TierClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bountyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "tierWinners",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "TierWinnerSelected",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressToExternalUserId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bountyAddressToBountyId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "externalUserIdToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IOpenQ__factory {
  static readonly abi = _abi;
  static createInterface(): IOpenQInterface {
    return new utils.Interface(_abi) as IOpenQInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IOpenQ {
    return new Contract(address, _abi, signerOrProvider) as IOpenQ;
  }
}
