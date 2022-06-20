const eventGenerator = (eventType: string, params: any) => {
	switch (eventType) {
		case "BountyCreated":
			const { bountyId, organization, issuerAddress, bountyAddress, bountyMintTime } = params
			return {
				request: {
					body: {
						sentinel: {
							id: "9b6f157e-d6b8-486b-97b8-ba6a0282b235"
						},
						matchReasons: [
							{
								params: {
									bountyId,
									organization,
									issuerAddress,
									bountyAddress,
									bountyMintTime
								},
								signature: "BountyCreated(string,string,address,indexed address,uint256)"
							}
						]
					}
				},
				secrets: {
					GITHUB_BOT_SECRET: process.env.GITHUB_BOT_SECRET,
					OPENQ_API_SECRET: process.env.OPENQ_API_SECRET
				}
			};
		default:
			throw new Error()
	}
}

const BountyCreated = {
	request: {
		body: {
			sentinel: {
				id: "9b6f157e-d6b8-486b-97b8-ba6a0282b235"
			},
			matchReasons: [
				{
					params: {
						bountyId: "I_kwDOGWnnz85L2NI_",
						organization: "MDEyOk9yZ2FuaXphdGlvbjc3NDAyNTM4",
						issuerAddress: "0x46e09468616365256F11F4544e65cE0C70ee624b",
						bountyAddress: "0x94e09468616365256F11F4544e65cE0C70ee624b",
						bountyMintTime: 143434343
					},
					signature: "BountyCreated(string,string,address,indexed address,uint256)"
				}
			]
		}
	},
	secrets: {
		GITHUB_BOT_SECRET: process.env.GITHUB_BOT_SECRET,
		OPENQ_API_SECRET: process.env.OPENQ_API_SECRET
	}
};

export default eventGenerator