import { ethers } from "ethers";
import axios, { AxiosRequestHeaders } from "axios";

import { ClaimManagerV1, DepositManagerV1, OpenQV1 } from "../typechain";
import { abi as OpenQABI } from "../OpenQV1.json";
import { abi as DepositManagerABI } from "../DepositManagerV1.json";
import { abi as ClaimManagerABI } from "../ClaimManagerV1.json";

import eventGenerator from "./eventGenerator";

require("dotenv").config();

// const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL as string)
const provider = new ethers.providers.WebSocketProvider(
  process.env.PROVIDER_URL as string
);

const OPENQ_PROXY_ADDRESS = process.env.OPENQ_PROXY_ADDRESS as string;
const DEPOSIT_MANAGER_PROXY_ADDRESS = process.env
  .DEPOSIT_MANAGER_PROXY_ADDRESS as string;
const CLAIM_MANAGER_PROXY_ADDRESS = process.env
  .CLAIM_MANAGER_PROXY_ADDRESS as string;

const openQ = new ethers.Contract(
  OPENQ_PROXY_ADDRESS,
  OpenQABI,
  provider
) as OpenQV1;
const depositManager = new ethers.Contract(
  DEPOSIT_MANAGER_PROXY_ADDRESS,
  DepositManagerABI,
  provider
) as DepositManagerV1;
const claimManager = new ethers.Contract(
  CLAIM_MANAGER_PROXY_ADDRESS,
  ClaimManagerABI,
  provider
) as ClaimManagerV1;

const BountyCreatedFilter = openQ.filters.BountyCreated();

const SupportingDocumentsCompleteSetFilter =
  openQ.filters.SupportingDocumentsCompleteSet();
const TokenDepositReceivedFilter =
  depositManager.filters.TokenDepositReceived();

const DepositRefundedFilter = depositManager.filters.DepositRefunded();

const BountyClosedFilter = openQ.filters.BountyClosed();

const TokenBalanceClaimedFilter = claimManager.filters.TokenBalanceClaimed();

async function main() {
  const events = await openQ.queryFilter(BountyCreatedFilter);

  openQ.on(
    BountyCreatedFilter,
    async (
      bountyId,
      organization,
      issuerAddress,
      bountyAddress,
      bountyMintTime,
      bountyType,
      data,
      version
    ) => {
      const headers = {
        Authorization: process.env.OPENQ_API_SECRET,
      };

      try {
        const result = await axios.post(
          `${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`,

          eventGenerator("BountyCreated", {
            bountyId,
            organization,
            issuerAddress,
            bountyAddress,
            bountyMintTime,
            bountyType,
            data,
            version,
          }),
          { headers: headers as AxiosRequestHeaders }
        );
      } catch (error: any) {
        console.error(error.response);
      }
    }
  );
  openQ.on(
    SupportingDocumentsCompleteSetFilter,
    async (bountyAddress, bountyType, data, version) => {
      const headers = {
        Authorization: process.env.OPENQ_API_SECRET,
      };

      try {
        const result = await axios.post(
          `${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`,
          eventGenerator("SupportingDocumentsCompleteSet", {
            bountyAddress,
            bountyType,
            data,
            version,
          }),

          { headers: headers as AxiosRequestHeaders }
        );
      } catch (error: any) {
		console.log(error, "early")
        console.error(error.response);
      }
    }
  );

  depositManager.on(
    TokenDepositReceivedFilter,
    async (
      depositId,
      bountyAddress,
      bountyId,
      organization,
      tokenAddress,
      receiveTime,
      sender,
      expiration,
      volume,
      bountyType,
      data,
      version
    ) => {
      const headers = {
        Authorization: process.env.OPENQ_API_SECRET,
      };

      try {
        const result = await axios.post(
          `${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`,
          eventGenerator("TokenDepositReceived", {
            depositId,
            bountyAddress,
            bountyId,
            organization,
            tokenAddress,
            receiveTime,
            sender,
            expiration,
            volume,
            bountyType,
            data,
            version,
          }),
          { headers: headers as AxiosRequestHeaders }
        );
      } catch (error: any) {
        console.error(error.response);
      }
    }
  );

  depositManager.on(
    DepositRefundedFilter,
    async (
      depositId,
      bountyId,
      bountyAddress,
      organization,
      refundTime,
      tokenAddress,
      volume,
      bountyType,
      data,
      version
    ) => {
      const headers = {
        Authorization: process.env.OPENQ_API_SECRET,
      };

      try {
        const result = await axios.post(
          `${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`,
          eventGenerator("DepositRefunded", {
            depositId,
            bountyId,
            bountyAddress,
            organization,
            refundTime,
            tokenAddress,
            volume,
            bountyType,
            data,
            version,
          }),
          { headers: headers as AxiosRequestHeaders }
        );
      } catch (error: any) {
        console.error(error.response);
      }
    }
  );

  claimManager.on(
    TokenBalanceClaimedFilter,
    async (
      bountyId,
      bountyAddress,
      organization,
      closer,
      payoutTime,
      tokenAddress,
      volume,
      bountyType,
      data,
      version
    ) => {
      const headers = {
        Authorization: process.env.OPENQ_API_SECRET,
      };

      try {
        const result = await axios.post(
          `${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`,
          eventGenerator("TokenBalanceClaimed", {
            bountyId,
            bountyAddress,
            organization,
            closer,
            payoutTime,
            tokenAddress,
            volume,
            bountyType,
            data,
            version,
          }),
          { headers: headers as AxiosRequestHeaders }
        );
      } catch (error: any) {
        console.error(error.response);
      }
    }
  );

  openQ.on(
    BountyClosedFilter,
    async (
      bountyId,
      bountyAddress,
      organization,
      closer,
      bountyClosedTime,
      bountyType,
      data,
      version
    ) => {
      const headers = {
        Authorization: process.env.OPENQ_API_SECRET,
      };

      try {
        const result = await axios.post(
          `${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`,
          eventGenerator("BountyClosed", {
            bountyId,
            bountyAddress,
            organization,
            closer,
            bountyClosedTime,
            bountyType,
            data,
            version,
          }),
          { headers: headers as AxiosRequestHeaders }
        );
      } catch (error: any) {
        console.error(error.response);
      }
    }
  );
}

main();
