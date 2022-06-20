declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PROVIDER_URL: string
			GITHUB_BOT_SECRET: string
			OPENQ_API_SECRET: string
			OPENQ_ADDRESS: string
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }