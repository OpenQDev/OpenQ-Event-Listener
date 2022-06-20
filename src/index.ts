import { ethers } from 'ethers'

import { OpenQV0 } from '../typechain'
import { abi as OpenQABI } from '../OpenQV0.json'

import eventGenerator from './eventGenerator'

// const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545')
const provider = new ethers.providers.WebSocketProvider('ws://127.0.0.1:8545')

const OPENQ_ADDRESS = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707'

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
