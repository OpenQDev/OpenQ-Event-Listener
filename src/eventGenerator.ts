const BOUTNY_CREATED_SIGNATURE = "BountyCreated(string,string,address,indexed address,uint256)"
const TOKEN_DEPOSIT_RECEIVED = "TokenDepositReceived(bytes32,address,string,string,address,uint256,address,uint256,uint256)"
const STAGING_SENTINEL_ID = "9b6f157e-d6b8-486b-97b8-ba6a0282b235"

const eventGenerator = (eventType: string, params: any) => {
	let signature;
	switch (eventType) {
		case "BountyCreated":
			signature = BOUTNY_CREATED_SIGNATURE
			break
			
		case "TokenDepositReceived":
			signature = TOKEN_DEPOSIT_RECEIVED
			break
		default:
			throw new Error()
	}
	return {
		request: {
			body: {
				sentinel: {
					id: STAGING_SENTINEL_ID
				},
				matchReasons: [
					{
						params,
						signature
					}
				]
			}
		},
		secrets: {
			GITHUB_BOT_SECRET: process.env.GITHUB_BOT_SECRET,
			OPENQ_API_SECRET: process.env.OPENQ_API_SECRET
		}
	};
}

export default eventGenerator