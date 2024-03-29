/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IClaimManagerInterface extends utils.Interface {
  functions: {};

  events: {
    "BountyClosed(string,address,string,address,uint256,uint256,bytes,uint256)": EventFragment;
    "ClaimSuccess(uint256,uint256,bytes,uint256)": EventFragment;
    "NFTClaimed(string,address,string,address,uint256,address,uint256,uint256,bytes,uint256)": EventFragment;
    "TokenBalanceClaimed(string,address,string,address,uint256,address,uint256,uint256,bytes,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BountyClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimSuccess"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBalanceClaimed"): EventFragment;
}

export interface BountyClosedEventObject {
  bountyId: string;
  bountyAddress: string;
  organization: string;
  closer: string;
  bountyClosedTime: BigNumber;
  bountyType: BigNumber;
  data: string;
  version: BigNumber;
}
export type BountyClosedEvent = TypedEvent<
  [string, string, string, string, BigNumber, BigNumber, string, BigNumber],
  BountyClosedEventObject
>;

export type BountyClosedEventFilter = TypedEventFilter<BountyClosedEvent>;

export interface ClaimSuccessEventObject {
  claimTime: BigNumber;
  bountyType: BigNumber;
  data: string;
  version: BigNumber;
}
export type ClaimSuccessEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  ClaimSuccessEventObject
>;

export type ClaimSuccessEventFilter = TypedEventFilter<ClaimSuccessEvent>;

export interface NFTClaimedEventObject {
  bountyId: string;
  bountyAddress: string;
  organization: string;
  closer: string;
  payoutTime: BigNumber;
  tokenAddress: string;
  tokenId: BigNumber;
  bountyType: BigNumber;
  data: string;
  version: BigNumber;
}
export type NFTClaimedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ],
  NFTClaimedEventObject
>;

export type NFTClaimedEventFilter = TypedEventFilter<NFTClaimedEvent>;

export interface TokenBalanceClaimedEventObject {
  bountyId: string;
  bountyAddress: string;
  organization: string;
  closer: string;
  payoutTime: BigNumber;
  tokenAddress: string;
  volume: BigNumber;
  bountyType: BigNumber;
  data: string;
  version: BigNumber;
}
export type TokenBalanceClaimedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ],
  TokenBalanceClaimedEventObject
>;

export type TokenBalanceClaimedEventFilter =
  TypedEventFilter<TokenBalanceClaimedEvent>;

export interface IClaimManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IClaimManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "BountyClosed(string,address,string,address,uint256,uint256,bytes,uint256)"(
      bountyId?: null,
      bountyAddress?: null,
      organization?: null,
      closer?: null,
      bountyClosedTime?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): BountyClosedEventFilter;
    BountyClosed(
      bountyId?: null,
      bountyAddress?: null,
      organization?: null,
      closer?: null,
      bountyClosedTime?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): BountyClosedEventFilter;

    "ClaimSuccess(uint256,uint256,bytes,uint256)"(
      claimTime?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): ClaimSuccessEventFilter;
    ClaimSuccess(
      claimTime?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): ClaimSuccessEventFilter;

    "NFTClaimed(string,address,string,address,uint256,address,uint256,uint256,bytes,uint256)"(
      bountyId?: null,
      bountyAddress?: null,
      organization?: null,
      closer?: null,
      payoutTime?: null,
      tokenAddress?: null,
      tokenId?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): NFTClaimedEventFilter;
    NFTClaimed(
      bountyId?: null,
      bountyAddress?: null,
      organization?: null,
      closer?: null,
      payoutTime?: null,
      tokenAddress?: null,
      tokenId?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): NFTClaimedEventFilter;

    "TokenBalanceClaimed(string,address,string,address,uint256,address,uint256,uint256,bytes,uint256)"(
      bountyId?: null,
      bountyAddress?: null,
      organization?: null,
      closer?: null,
      payoutTime?: null,
      tokenAddress?: null,
      volume?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): TokenBalanceClaimedEventFilter;
    TokenBalanceClaimed(
      bountyId?: null,
      bountyAddress?: null,
      organization?: null,
      closer?: null,
      payoutTime?: null,
      tokenAddress?: null,
      volume?: null,
      bountyType?: null,
      data?: null,
      version?: null
    ): TokenBalanceClaimedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
