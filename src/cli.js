export function cli(args) {
	args = args.slice(2)
	console.log(args)
	if (args.length < 1) return usageMessage()

	if (args[0].toLowerCase() !== 'build' || 'test' || 'deploy') return usageMessage()

	if (args[0].toLowerCase() === 'build') {
		if (!args[2]) return usageMessage()
		if (args[1].toLowerCase() !== '--test' || '--prod' || '--production') return usageMessage()
		
		//build
	} else if (args[0].toLowerCase() === 'test') {
		//test
	} else {
		//verify deploy id
		//deploy
	}
}

function usageMessage() {
	console.log('Usage: solrising <command> [<args>]')
		console.log('Commands:')
		console.log('	build [--test | --prod] [-v number]')
		console.log('	test')
		console.log('	deploy [id]')

}