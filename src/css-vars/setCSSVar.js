import { writeFileSync } from 'fs'
export default async function setCSSVar(key, value) {
	const data = require('./CSSVars.json')
	data[key] = value
	try {
		let write = writeFileSync('./CSSVars.json', data, {encoding: 'utf8'})
		console.log(write)
	} catch (err) {
		throw err
	}
}