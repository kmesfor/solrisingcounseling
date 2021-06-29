const { MongoClient } = require('mongodb')

async function main() {
	const uri = 'mongodb+srv://admin:8w9eymHQgaHfH1i2@admindata.ouzo6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

	const client = new MongoClient(uri)

	try {
		await client.connect()
	} finally {
		await client.close()
	}
}

//username: admin
//password: 8w9eymHQgaHfH1i2