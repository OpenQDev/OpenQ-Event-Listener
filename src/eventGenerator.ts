const BOUTNY_CREATED_SIGNATURE = "BountyCreated(string,string,address,indexed address,uint256)"

require('dotenv').config()

const eventGenerator = (eventType: string, params: any) => {
	let signature;
	switch (eventType) {
		case "BountyCreated":
			signature = BOUTNY_CREATED_SIGNATURE
			break
		default:
			throw new Error()
	}
	return {
		request: {
			body: {
				sentinel: {
					id: process.env.LOCAL_EVENT_LISTENER_ID
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