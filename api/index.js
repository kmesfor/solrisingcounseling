const express = require('express')
const app = express()
const AUTH_SECRET = require('./secrets.json').AUTH_SECRET
const USERNAME_SECRET = require('./secrets.json').USERNAME_SECRET
const PASSWORD_SECRET = require('./secrets.json').PASSWORD_SECRET
const ADMIN_PANEL_REDIRECT = require('./secrets.json').ADMIN_PANEL_REDIRECT
const SITE_ORIGIN = require('./secrets.json').SITE_ORIGIN

const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require('path')


app.use(cors({
	origin: SITE_ORIGIN
}))
app.use(bodyParser.json())
app.use(fileUpload())
app.use(express.static(path.resolve('../build')))

const ASSETS_STORAGE_PATH = require('./secrets.json').ASSETS_STORAGE_PATH


const API_PORT = require('./secrets.json').API_PORT
const fs = require('fs')

app.get('/', (req, res) => {
	res.sendFile(path.resolve('../build/index.html'))
})

app.get('/signin', (req, res) => {
	res.sendFile(path.resolve('../build/index.html'))
	res.redirect('/signin')
})

app.post('/api/login', (req, res) => {
	console.log(req.body)
	if (!req.body) return res.send({statusCode: 401, message: 'Missing login credentials'})
	if (!req.body.username) return res.send({statusCode: 401, message: 'Missing login credentials'})
	if (!req.body.password) return res.send({statusCode: 401, message: 'Missing login credentials'})

	if (req.body.username !== USERNAME_SECRET) return res.send({statusCode: 401, message: 'Invalid login credentials'})
	if (req.body.password !== PASSWORD_SECRET) return res.send({statusCode: 401, message: 'Invalid login credentials'})
	return res.send({statusCode: 200, message: 'OK'})
})

app.get('/api/config', (req, res) => {
	try {
		let configFile = JSON.parse(fs.readFileSync(path.resolve(ASSETS_STORAGE_PATH + '/site_data.json'), 'utf-8'))
		// for (let i = 0; i < configFile.pullout_entries.length; i++) {
		// 	configFile.pullout_entries[i].icon = resolveFile(configFile.pullout_entries[i].icon)
		// 	configFile.pullout_entries[i].banner = resolveFile(configFile.pullout_entries[i].banner)
		// }
		if (!configFile) return res.send({statusCode: 404, message: 'Site data not found'})
		console.log(configFile)
		return res.send({statusCode: 200, message: 'OK', data: configFile})
	} catch (err) {
		console.log(err)
		return res.send({statusCode: 500, message: 'Internal server error: ' + err})
	}
})

app.post('/api/config', (req, res) => {
	console.log(req.body)

	if (!req.body.auth) return res.send({statusCode: 401, message: 'Missing auth credentials'})
	if (!req.body.data) return res.send({statusCode: 401, message: 'Missing data'})
	if (req.body.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
	try {
		fs.writeFileSync(path.resolve(ASSETS_STORAGE_PATH + '/site_data.json'), JSON.stringify(req.body.data, null, 4))
	} catch (err) {
		console.log(err)
		res.send({statusCode: 500, message: 'Internal server error: ' + err})
	}
	return res.send({statusCode: 200, message: 'OK'})
})

app.get('/api/assets/:assetFileName', (req, res) => {
	if (!req.params.assetFileName) return res.send({statusCode: 401, message: 'Invalid request'})
	try {
		return res.sendFile(path.resolve(ASSETS_STORAGE_PATH + '/assets/' + req.params.assetFileName))
	} catch (err) {
		return res.send({statusCode: 500, message: 'Error: ' + err})
	}
})

app.post('/api/create_asset', (req, res) => {
	console.log(req.files)
	console.log(req.body)
	if (!req.body.auth) return res.send({statusCode: 401, message: 'Missing auth credentials'})
	if (req.body.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
	if (!req.body.name || req.body.isImage === undefined || (req.body.isImage !== 'true' | 'false') || !req.body.alt) return res.send({statusCode: 401, message: 'Invalid data'})
	if (!req.files.file) return res.send({statusCode: 401, message: 'Invalid file upload'})
	
	let configFile = JSON.parse(fs.readFileSync(path.resolve(ASSETS_STORAGE_PATH + '/site_data.json'), 'utf-8'))
	if (configFile.assets[req.body.name]) return res.send({statusCode: 401, message: 'An asset with that name already exists'})

	let fileName = req.body.name + '.' + (req.files.file.name.split('.')[req.files.file.name.split('.').length - 1]) // file name + . + uploaded file ending
	
	for (let i = 0; i < Object.keys(configFile.assets).length; i++) {
		if (Object.keys(configFile.assets)[i].src === fileName) return res.send({statusCode: 401, message: 'A file with that name already exists'}) 
	}
	configFile.assets[req.body.name] = {
		src: fileName,
		isImage: req.body.isImage.toLowerCase() === 'true' ? true : false,
		alt: req.body.alt
	}
	req.files.file.mv(path.resolve(ASSETS_STORAGE_PATH + '/assets/' + fileName), (err) => {
		if (err) return res.send({statusCode: 500, message: 'Error: ' + err})
		try {
			fs.writeFileSync(path.resolve(ASSETS_STORAGE_PATH + '/site_data.json'), JSON.stringify(configFile, null, 4))
		} catch (err) {
			console.log(err)
			return res.send({statusCode: 500, message: 'Internal server error: ' + err})
		}
		return res.send({statusCode: 200, message: 'OK'})
	})
})

app.post('/api/delete_asset', (req, res) => {
	console.log(req.body)
	if (!req.body.auth) return res.send({statusCode: 401, message: 'Missing auth credentials'})
	if (req.body.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
	if (!req.body.name) return res.send({statusCode: 401, message: 'Missing data'})
	
	let configFile = JSON.parse(fs.readFileSync(path.resolve(ASSETS_STORAGE_PATH + '/site_data.json'), 'utf-8'))
	if (!configFile.assets[req.body.name]) return res.send({statusCode: 401, message: 'Asset does not exist'})
	
	try {
		fs.rmSync(ASSETS_STORAGE_PATH + '/assets/' + configFile.assets[req.body.name].src)

		delete configFile.assets[req.body.name]
		fs.writeFileSync(path.resolve(ASSETS_STORAGE_PATH + '/site_data.json'), JSON.stringify(configFile, null, 4))

		return res.send({statusCode: 200, message: 'OK'})
	} catch (err) {
		console.log(err)
		return res.send({statusCode: 500, message: 'Internal server error: ' + err})
	}
})

function resolveFile(file) {
	return path.resolve(ASSETS_STORAGE_PATH + '/assets/' + file)
}

// app.get('/api/assets', (req, res) => {
// 	console.log(res.query)

// 	if (!req.query.asset) return res.send({statusCode: 400, message: 'Missing asset field'})
// 	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.asset) === -1) return res.send({statusCode: 404, message: 'Asset not found'})
// 	return res.sendFile(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.asset))
// })

// //create
// app.post('/api/assets', (req, res) => {
// 	if (!req.query.auth) return res.send({statusCode: 400, message: 'Missing auth credentials'})
// 	if (!req.query.assetName) return res.send({statusCode: 400, message: 'Missing assetName field'})
// 	if (!req.query.assetType) return res.send({statusCode: 400, message: 'Misisng assetType field'})
// 	if (!req.query.assetContent) return res.send({statusCode: 400, message: 'Missing assetContent field'})

// 	if (req.query.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
// 	if (typeof req.query.assetName !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetName field'})
// 	if (typeof req.query.assetType !== 'string') return res.send({statusCode: 400, message: 'Expected string type for assetContent field'})
// 	if (req.query.assetType !== 'text' || 'image' || 'boolean') return res.send({statusCode: 400, message: 'Expected text, image, or boolean'})


// 	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.assetName + '.txt') !== -1) return res.send({status: 409, message: 'Asset with such name already exists'})

// 	try {
// 		fs.writeFileSync(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.assetName + '.txt'), req.query.assetContent, {encoding: 'utf-8'})
// 	} catch (err) {
// 		return res.send({statusCode: 500, message: `Internal error: ${err}`})
// 	}
// 	return res.send({statusCode: 200, message: 'OK'})
// })

// //update
// app.put('/api/assets', (req, res) => {
// 	if (!req.query.auth) return res.send({statusCode: 400, message: 'Missing auth credentials'})
// 	if (!req.query.assetName) return res.send({statusCode: 400, message: 'Missing assetName field'})
// 	if (!req.query.assetContent) return res.send({statusCode: 400, message: 'Missing assetContent field'})

// 	if (req.query.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
// 	if (typeof req.query.assetName !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetName field'})
// 	if (typeof req.query.assetContent !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetContent field'})

// 	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.assetName + '.txt') === -1) return res.send({status: 409, message: 'Asset with such name does not exist'})

// 	try {
// 		fs.writeFileSync(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.assetName + '.txt'), req.query.assetContent, {encoding: 'utf-8'})
// 	} catch (err) {
// 		return res.send({statusCode: 500, message: `Internal error: ${err}`})
// 	}
// 	return res.send({statusCode: 200, message: 'OK'})
// })

// //delete
// app.delete('/api/assets', (req, res) => {
// 	if (!req.query.auth) return res.send({statusCode: 400, message: 'Missing auth credentials'})
// 	if (!req.query.assetName) return res.send({statusCode: 400, message: 'Missing assetName field'})

// 	if (req.query.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
// 	if (typeof req.query.assetName !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetName field'})

// 	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.assetName + '.txt') === -1) return res.send({status: 409, message: 'Asset with such name does not exist'})

// 	//TODO: add a list of "untouchable" assets that cannot be deleted via api
// 	//TODO: support images within the api by adding a new 'type' property of either image or text and checking those respectively
// 	try {
// 		fs.unlinkSync(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.assetName + '.txt'))
// 	} catch (err) {
// 		return res.send({statusCode: 500, message: `Internal error: ${err}`})
// 	}
// 	return res.send({statusCode: 200, message: 'OK'})
// })

app.listen(API_PORT, () => console.log('API has started!'))