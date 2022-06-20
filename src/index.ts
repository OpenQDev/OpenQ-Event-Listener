import { ethers } from 'ethers'

import { OpenQV0 } from '../typechain'
import { abi as OpenQABI } from '../OpenQV0.json'

import eventGenerator from './eventGenerator'

require('dotenv').config()

// const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL as string)
const provider = new ethers.providers.WebSocketProvider(process.env.PROVIDER_URL as string)

const OPENQ_ADDRESS = process.env.OPENQ_ADDRESS as string

const openQ = new ethers.Contract(OPENQ_ADDRESS, OpenQABI, provider) as OpenQV0

const BountyCreatedFilter = openQ.filters.BountyCreated()

async function main() {
	const events = await openQ.queryFilter(BountyCreatedFilter)
	console.log(events)

	console.log('---------------------------------')

	openQ.on(BountyCreatedFilter, (bountyId, organization, issuerAddress, bountyAddress, bountyMintTime) => {
		console.log({
			bountyId,
			organization,
			issuerAddress,
			bountyAddress,
			bountyMintTime
		})
	})
}

main()
