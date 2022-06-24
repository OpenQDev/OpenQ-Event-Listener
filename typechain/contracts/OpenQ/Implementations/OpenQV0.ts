/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface OpenQV0Interface extends utils.Interface {
  functions: {
    "bountyAddressToBountyId(address)": FunctionFragment;
    "bountyFactory()": FunctionFragment;
    "bountyIdToAddress(string)": FunctionFragment;
    "bountyIsOpen(string)": FunctionFragment;
    "claimBounty(string,address,string)": FunctionFragment;
    "extendDeposit(string,bytes32,uint256)": FunctionFragment;
    "fundBountyNFT(string,address,uint256,uint256)": FunctionFragment;
    "fundBountyToken(string,address,uint256,uint256)": FunctionFragment;
    "getImplementation()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "mintBounty(string,string)": FunctionFragment;
    "openQTokenWhitelist()": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "refundDeposit(string,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBountyFactory(address)": FunctionFragment;
    "setTokenWhitelist(address)": FunctionFragment;
    "tokenAddressLimitReached(string)": FunctionFragment;
    "transferOracle(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bountyAddressToBountyId"
      | "bountyFactory"
      | "bountyIdToAddress"
      | "bountyIsOpen"
      | "claimBounty"
      | "extendDeposit"
      | "fundBountyNFT"
      | "fundBountyToken"
      | "getImplementation"
      | "initialize"
      | "isWhitelisted"
      | "mintBounty"
      | "openQTokenWhitelist"
      | "oracle"
      | "owner"
      | "proxiableUUID"
      | "refundDeposit"
      | "renounceOwnership"
      | "setBountyFactory"
      | "setTokenWhitelist"
      | "tokenAddressLimitReached"
      | "transferOracle"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bountyAddressToBountyId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "bountyFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bountyIdToAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "bountyIsOpen",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimBounty",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "extendDeposit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fundBountyNFT",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fundBountyToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBounty",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "openQTokenWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "refundDeposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBountyFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenWhitelist",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenAddressLimitReached",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOracle",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "bountyAddressToBountyId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bountyFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bountyIdToAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bountyIsOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimBounty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extendDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundBountyNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundBountyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintBounty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openQTokenWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "refundDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBountyFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenAddressLimitReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "BountyClosed(string,address,string,address,uint256,string)": EventFragment;
    "BountyCreated(string,string,address,address,uint256)": EventFragment;
    "DepositExtended(bytes32,uint256)": EventFragment;
    "DepositRefunded(bytes32,string,address,string,uint256,address,uint256)": EventFragment;
    "NFTDepositReceived(bytes32,address,string,string,address,uint256,address,uint256,uint256)": EventFragment;
    "OracleTransferred(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenBalanceClaimed(string,address,string,address,uint256,address,uint256)": EventFragment;
    "TokenDepositReceived(bytes32,address,string,string,address,uint256,address,uint256,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BountyClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BountyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositExtended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositRefunded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTDepositReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OracleTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBalanceClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDepositReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface BountyClosedEventObject {
  bountyId: string;
  bountyAddress: string;
  organization: string;
  closer: string;
  bountyClosedTime: BigNumber;
  closerData: string;
}
export type BountyClosedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string],
  BountyClosedEventObject
>;

export type BountyClosedEventFilter = TypedEventFilter<BountyClosedEvent>;

export interface BountyCreatedEventObject {
  bountyId: string;
  organization: string;
  issuerAddress: string;
  bountyAddress: string;
  bountyMintTime: BigNumber;
}
export type BountyCreatedEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  BountyCreatedEventObject
>;

export type BountyCreatedEventFilter = TypedEventFilter<BountyCreatedEvent>;

export interface DepositExtendedEventObject {
  depositId: string;
  newExpiration: BigNumber;
}
export type DepositExtendedEvent = TypedEvent<
  [string, BigNumber],
  DepositExtendedEventObject
>;

export type DepositExtendedEventFilter = TypedEventFilter<DepositExtendedEvent>;

export interface DepositRefundedEventObject {
  depositId: string;
  bountyId: string;
  bountyAddress: string;
  organization: string;
  refundTime: BigNumber;
  tokenAddress: string;
  volume: BigNumber;
}
export type DepositRefundedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string, BigNumber],
  DepositRefundedEventObject
>;

export type DepositRefundedEventFilter = TypedEventFilter<DepositRefundedEvent>;

export interface NFTDepositReceivedEventObject {
  depositId: string;
  bountyAddress: string;
  bountyId: string;
  organization: string;
  tokenAddress: string;
  receiveTime: BigNumber;
  sender: string;
  expiration: BigNumber;
  tokenId: BigNumber;
}
export type NFTDepositReceivedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ],
  NFTDepositReceivedEventObject
>;

export type NFTDepositReceivedEventFilter =
  TypedEventFilter<NFTDepositReceivedEvent>;

export interface OracleTransferredEventObject {
  previousOracle: string;
  newOracle: string;
}
export type OracleTransferredEvent = TypedEvent<
  [string, string],
  OracleTransferredEventObject
>;

export type OracleTransferredEventFilter =
  TypedEventFilter<OracleTransferredEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenBalanceClaimedEventObject {
  bountyId: string;
  bountyAddress: string;
  organization: string;
  closer: string;
  payoutTime: BigNumber;
  tokenAddress: string;
  volume: BigNumber;
}
export type TokenBalanceClaimedEvent = TypedEvent<
  [string, string, string, string, BigNumber, string, BigNumber],
  TokenBalanceClaimedEventObject
>;

export type TokenBalanceClaimedEventFilter =
  TypedEventFilter<TokenBalanceClaimedEvent>;

export interface TokenDepositReceivedEventObject {
  depositId: string;
  bountyAddress: string;
  bountyId: string;
  organization: string;
  tokenAddress: string;
  receiveTime: BigNumber;
  sender: string;
  expiration: BigNumber;
  volume: BigNumber;
}
export type TokenDepositReceivedEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ],
  TokenDepositReceivedEventObject
>;

export type TokenDepositReceivedEventFilter =
  TypedEventFilter<TokenDepositReceivedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface OpenQV0 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OpenQV0Interface;

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

  functions: {
    bountyAddressToBountyId(
      _bountyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    bountyFactory(overrides?: CallOverrides): Promise<[string]>;

    bountyIdToAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    bountyIsOpen(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimBounty(
      _bountyId: PromiseOrValue<string>,
      _closer: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    extendDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundBountyNFT(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundBountyToken(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      oracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isWhitelisted(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintBounty(
      _bountyId: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    openQTokenWhitelist(overrides?: CallOverrides): Promise<[string]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    refundDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBountyFactory(
      _bountyFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTokenWhitelist(
      _openQTokenWhitelist: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenAddressLimitReached(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOracle(
      _newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bountyAddressToBountyId(
    _bountyAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  bountyFactory(overrides?: CallOverrides): Promise<string>;

  bountyIdToAddress(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  bountyIsOpen(
    _bountyId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimBounty(
    _bountyId: PromiseOrValue<string>,
    _closer: PromiseOrValue<string>,
    _closerData: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  extendDeposit(
    _bountyId: PromiseOrValue<string>,
    _depositId: PromiseOrValue<BytesLike>,
    _seconds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundBountyNFT(
    _bountyId: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    _expiration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundBountyToken(
    _bountyId: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _volume: PromiseOrValue<BigNumberish>,
    _expiration: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getImplementation(overrides?: CallOverrides): Promise<string>;

  initialize(
    oracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isWhitelisted(
    _tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintBounty(
    _bountyId: PromiseOrValue<string>,
    _organization: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  openQTokenWhitelist(overrides?: CallOverrides): Promise<string>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  refundDeposit(
    _bountyId: PromiseOrValue<string>,
    _depositId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBountyFactory(
    _bountyFactory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTokenWhitelist(
    _openQTokenWhitelist: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenAddressLimitReached(
    _bountyId: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOracle(
    _newOracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bountyAddressToBountyId(
      _bountyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    bountyFactory(overrides?: CallOverrides): Promise<string>;

    bountyIdToAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    bountyIsOpen(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimBounty(
      _bountyId: PromiseOrValue<string>,
      _closer: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    extendDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    fundBountyNFT(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    fundBountyToken(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getImplementation(overrides?: CallOverrides): Promise<string>;

    initialize(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isWhitelisted(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintBounty(
      _bountyId: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    openQTokenWhitelist(overrides?: CallOverrides): Promise<string>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    refundDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBountyFactory(
      _bountyFactory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenWhitelist(
      _openQTokenWhitelist: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenAddressLimitReached(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOracle(
      _newOracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "BountyClosed(string,address,string,address,uint256,string)"(
      bountyId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      organization?: null,
      closer?: null,
      bountyClosedTime?: null,
      closerData?: null
    ): BountyClosedEventFilter;
    BountyClosed(
      bountyId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      organization?: null,
      closer?: null,
      bountyClosedTime?: null,
      closerData?: null
    ): BountyClosedEventFilter;

    "BountyCreated(string,string,address,address,uint256)"(
      bountyId?: null,
      organization?: null,
      issuerAddress?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      bountyMintTime?: null
    ): BountyCreatedEventFilter;
    BountyCreated(
      bountyId?: null,
      organization?: null,
      issuerAddress?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      bountyMintTime?: null
    ): BountyCreatedEventFilter;

    "DepositExtended(bytes32,uint256)"(
      depositId?: null,
      newExpiration?: null
    ): DepositExtendedEventFilter;
    DepositExtended(
      depositId?: null,
      newExpiration?: null
    ): DepositExtendedEventFilter;

    "DepositRefunded(bytes32,string,indexed address,string,uint256,address,uint256)"(
      depositId?: null,
      bountyId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      organization?: null,
      refundTime?: null,
      tokenAddress?: null,
      volume?: null
    ): DepositRefundedEventFilter;
    DepositRefunded(
      depositId?: null,
      bountyId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      organization?: null,
      refundTime?: null,
      tokenAddress?: null,
      volume?: null
    ): DepositRefundedEventFilter;

    "NFTDepositReceived(bytes32,address,string,string,address,uint256,address,uint256,uint256)"(
      depositId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      bountyId?: null,
      organization?: null,
      tokenAddress?: null,
      receiveTime?: null,
      sender?: null,
      expiration?: null,
      tokenId?: null
    ): NFTDepositReceivedEventFilter;
    NFTDepositReceived(
      depositId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      bountyId?: null,
      organization?: null,
      tokenAddress?: null,
      receiveTime?: null,
      sender?: null,
      expiration?: null,
      tokenId?: null
    ): NFTDepositReceivedEventFilter;

    "OracleTransferred(address,address)"(
      previousOracle?: PromiseOrValue<string> | null,
      newOracle?: PromiseOrValue<string> | null
    ): OracleTransferredEventFilter;
    OracleTransferred(
      previousOracle?: PromiseOrValue<string> | null,
      newOracle?: PromiseOrValue<string> | null
    ): OracleTransferredEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokenBalanceClaimed(string,address,string,address,uint256,address,uint256)"(
      bountyId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      organization?: null,
      closer?: null,
      payoutTime?: null,
      tokenAddress?: null,
      volume?: null
    ): TokenBalanceClaimedEventFilter;
    TokenBalanceClaimed(
      bountyId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      organization?: null,
      closer?: null,
      payoutTime?: null,
      tokenAddress?: null,
      volume?: null
    ): TokenBalanceClaimedEventFilter;

    "TokenDepositReceived(bytes32,address,string,string,address,uint256,address,uint256,uint256)"(
      depositId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      bountyId?: null,
      organization?: null,
      tokenAddress?: null,
      receiveTime?: null,
      sender?: null,
      expiration?: null,
      volume?: null
    ): TokenDepositReceivedEventFilter;
    TokenDepositReceived(
      depositId?: null,
      bountyAddress?: PromiseOrValue<string> | null,
      bountyId?: null,
      organization?: null,
      tokenAddress?: null,
      receiveTime?: null,
      sender?: null,
      expiration?: null,
      volume?: null
    ): TokenDepositReceivedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    bountyAddressToBountyId(
      _bountyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bountyFactory(overrides?: CallOverrides): Promise<BigNumber>;

    bountyIdToAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bountyIsOpen(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimBounty(
      _bountyId: PromiseOrValue<string>,
      _closer: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    extendDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundBountyNFT(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundBountyToken(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      oracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isWhitelisted(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintBounty(
      _bountyId: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    openQTokenWhitelist(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    refundDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBountyFactory(
      _bountyFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTokenWhitelist(
      _openQTokenWhitelist: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenAddressLimitReached(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOracle(
      _newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bountyAddressToBountyId(
      _bountyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bountyFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bountyIdToAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bountyIsOpen(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimBounty(
      _bountyId: PromiseOrValue<string>,
      _closer: PromiseOrValue<string>,
      _closerData: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    extendDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundBountyNFT(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundBountyToken(
      _bountyId: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _volume: PromiseOrValue<BigNumberish>,
      _expiration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      oracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintBounty(
      _bountyId: PromiseOrValue<string>,
      _organization: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    openQTokenWhitelist(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refundDeposit(
      _bountyId: PromiseOrValue<string>,
      _depositId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBountyFactory(
      _bountyFactory: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTokenWhitelist(
      _openQTokenWhitelist: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenAddressLimitReached(
      _bountyId: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOracle(
      _newOracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
