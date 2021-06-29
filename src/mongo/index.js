import { MongoClient } from 'mongodb'
import reactDom from 'react-dom'

export default async function createClient(uri) {
	const client = new MongoClient(uri)

	try {
		await client.connect()
	} catch (err) {
		//reactDom.render('<h1>Site Internal Error\nMore info: ' + err, document.getElementById('root'))
		throw err
	}
}