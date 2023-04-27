const BOUTNY_CREATED_SIGNATURE = "BountyCreated(string,string,address,address,uint256,uint256,bytes,uint256)"
const TOKEN_DEPOSIT_RECEIVED = "TokenDepositReceived(bytes32,address,string,string,address,uint256,address,uint256,uint256,uint256,bytes,uint256)"
const DEPOSIT_REFUNDED = "DepositRefunded(bytes32,string,address,string,uint256,address,uint256,uint256,bytes,uint256)"
const BOUNTY_CLOSED = "BountyClosed(string,address,string,address,uint256,uint256,bytes,uint256)"
const TOKEN_BALANCE_CLAIMED = "TokenBalanceClaimed(string,address,string,address,uint256,address,uint256,uint256,bytes,uint256)"
const SUPPORTING_DOCUMENTS_COMPLETE_SET = "SupportingDocumentsCompleteSet(address,uint256,bytes,uint256)";
const PAYOUT_SCHEDULE_UPDATED = "PayoutScheduleUpdated(string,address,string,address,uint256,uint256,bytes,uint256)";
const FUNDING_GOAL_SET = "FundingGoalSet(string,address,string,address,uint256,uint256,bytes,uint256)";

require('dotenv').config()

const eventGenerator = (eventType: string, params: any) => {
	console.log("eventType", eventType)
	let signature;
	switch (eventType) {
		case "BountyCreated":
			signature = BOUTNY_CREATED_SIGNATURE
			break
		case "TokenDepositReceived":
			signature = TOKEN_DEPOSIT_RECEIVED
			break
		case "DepositRefunded":
			signature = DEPOSIT_REFUNDED
			break;
		case "TokenBalanceClaimed":
			signature = TOKEN_BALANCE_CLAIMED
			break;
		case "BountyClosed":
			signature = BOUNTY_CLOSED
			break;
		case "SupportingDocumentsCompleteSet":
			signature = SUPPORTING_DOCUMENTS_COMPLETE_SET
			break;
		case "PayoutScheduleUpdated":
			signature = PAYOUT_SCHEDULE_UPDATED
			break;
		case "FundingGoalSet":
			signature = FUNDING_GOAL_SET
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