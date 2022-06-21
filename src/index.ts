import { ethers } from 'ethers'
import axios, { AxiosRequestHeaders } from 'axios'

import { OpenQV0 } from '../typechain'
import { abi as OpenQABI } from '../OpenQV0.json'

import eventGenerator from './eventGenerator'

require('dotenv').config()

// const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL as string)
const provider = new ethers.providers.WebSocketProvider(process.env.PROVIDER_URL as string)

const OPENQ_ADDRESS = process.env.OPENQ_ADDRESS as string

const openQ = new ethers.Contract(OPENQ_ADDRESS, OpenQABI, provider) as OpenQV0

const BountyCreatedFilter = openQ.filters.BountyCreated()

const TokenDepositReceivedFilter = openQ.filters.TokenDepositReceived()

const DepositRefundedFilter = openQ.filters.DepositRefunded()

async function main() {
	const events = await openQ.queryFilter(BountyCreatedFilter)

	console.log('---------------------------------')

	openQ.on(BountyCreatedFilter, async (bountyId, organization, issuerAddress, bountyAddress, bountyMintTime) => {
		console.log({
			bountyId,
			organization,
			issuerAddress,
			bountyAddress,
			bountyMintTime
		})

		const headers = {
			'Authorization': process.env.OPENQ_API_SECRET
		};

		try {
			const result = await axios.post(`${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`, eventGenerator('BountyCreated', { bountyAddress, bountyId, organization }), { headers: headers as AxiosRequestHeaders });
		} catch (error) {
			console.error(error)
		}
	});

	openQ.on(TokenDepositReceivedFilter, async (
		depositId,
		bountyAddress,
		bountyId,
		organization,
		tokenAddress,
		receiveTime,
		sender,
		expiration,
		volume
	) => {
		console.log({
			depositId,
			bountyAddress,
			bountyId,
			organization,
			tokenAddress,
			receiveTime,
			sender,
			expiration,
			volume
		})

		const headers = {
			'Authorization': process.env.OPENQ_API_SECRET
		};

		try {
			const result = await axios.post(`${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`, eventGenerator('TokenDepositReceived', { tokenAddress, volume, bountyAddress, }), { headers: headers as AxiosRequestHeaders });
			console.log(result)
		} catch (error) {
			console.error(error)
		}
	})

	openQ.on(DepositRefundedFilter, async (
		depositId,
		bountyId,
		bountyAddress,
		organization,
		refundTime,
		tokenAddress,
		volume
	) => {
		console.log({
			depositId,
			bountyId,
			bountyAddress,
			organization,
			refundTime,
			tokenAddress,
			volume,
		})

		const headers = {
			'Authorization': process.env.OPENQ_API_SECRET
		};

		try {
			const result = await axios.post(`${process.env.OPENQ_BOUNTY_ACTIONS_AUTOTASK_URL}`, eventGenerator('DepositRefunded', {
				depositId,
				bountyId,
				bountyAddress,
				organization,
				refundTime
			}), { headers: headers as AxiosRequestHeaders });
			console.log(result)
		} catch (error) {
			console.error(error)
		}
	})
}

main()
