const express = require('express')
const app = express()
const AUTH_SECRET = require('./secrets.json').AUTH_SECRET
const USERNAME_SECRET = require('./secrets.json').USERNAME_SECRET
const PASSWORD_SECRET = require('./secrets.json').PASSWORD_SECRET
const ADMIN_PANEL_REDIRECT = require('./secrets.json').ADMIN_PANEL_REDIRECT
const SITE_ORIGIN = require('./secrets.json').SITE_ORIGIN

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const ASSETS_STORAGE_PATH = require('./secrets.json').ASSETS_STORAGE_PATH
const API_PORT = require('./secrets.json').API_PORT
const fs = require('fs')
const path = require('path')

app.post('/api/login', (req, res) => {
	console.log(req.body)
	if (!req.body) return res.send({statusCode: 401, message: 'Missing login credentials'})
	if (!req.body.username) return res.send({statusCode: 401, message: 'Missing login credentials'})
	if (!req.body.password) return res.send({statusCode: 401, message: 'Missing login credentials'})

	if (req.body.username !== PASSWORD_SECRET) return res.send({statusCode: 401, message: 'Invalid login credentials'})
	if (req.body.password !== USERNAME_SECRET) return res.send({statusCode: 401, message: 'Invalid login credentials'})
	return res.send({statusCode: 200, message: 'OK'})
})

app.get('/api/assets', (req, res) => {
	console.log(res.query)

	if (!req.query.asset) return res.send({statusCode: 400, message: 'Missing asset field'})
	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.asset) === -1) return res.send({statusCode: 404, message: 'Asset not found'})
	return res.sendFile(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.asset))
})

//create
app.post('/api/assets', (req, res) => {
	if (!req.query.auth) return res.send({statusCode: 400, message: 'Missing auth credentials'})
	if (!req.query.assetName) return res.send({statusCode: 400, message: 'Missing assetName field'})
	if (!req.query.assetType) return res.send({statusCode: 400, message: 'Misisng assetType field'})
	if (!req.query.assetContent) return res.send({statusCode: 400, message: 'Missing assetContent field'})

	if (req.query.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
	if (typeof req.query.assetName !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetName field'})
	if (typeof req.query.assetType !== 'string') return res.send({statusCode: 400, message: 'Expected string type for assetContent field'})
	if (req.query.assetType !== 'text' || 'image' || 'boolean') return res.send({statusCode: 400, message: 'Expected text, image, or boolean'})


	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.assetName + '.txt') !== -1) return res.send({status: 409, message: 'Asset with such name already exists'})

	try {
		fs.writeFileSync(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.assetName + '.txt'), req.query.assetContent, {encoding: 'utf-8'})
	} catch (err) {
		return res.send({statusCode: 500, message: `Internal error: ${err}`})
	}
	return res.send({statusCode: 200, message: 'OK'})
})

//update
app.put('/api/assets', (req, res) => {
	if (!req.query.auth) return res.send({statusCode: 400, message: 'Missing auth credentials'})
	if (!req.query.assetName) return res.send({statusCode: 400, message: 'Missing assetName field'})
	if (!req.query.assetContent) return res.send({statusCode: 400, message: 'Missing assetContent field'})

	if (req.query.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
	if (typeof req.query.assetName !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetName field'})
	if (typeof req.query.assetContent !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetContent field'})

	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.assetName + '.txt') === -1) return res.send({status: 409, message: 'Asset with such name does not exist'})

	try {
		fs.writeFileSync(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.assetName + '.txt'), req.query.assetContent, {encoding: 'utf-8'})
	} catch (err) {
		return res.send({statusCode: 500, message: `Internal error: ${err}`})
	}
	return res.send({statusCode: 200, message: 'OK'})
})

//delete
app.delete('/api/assets', (req, res) => {
	if (!req.query.auth) return res.send({statusCode: 400, message: 'Missing auth credentials'})
	if (!req.query.assetName) return res.send({statusCode: 400, message: 'Missing assetName field'})

	if (req.query.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
	if (typeof req.query.assetName !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetName field'})

	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.assetName + '.txt') === -1) return res.send({status: 409, message: 'Asset with such name does not exist'})

	//TODO: add a list of "untouchable" assets that cannot be deleted via api
	//TODO: support images within the api by adding a new 'type' property of either image or text and checking those respectively
	try {
		fs.unlinkSync(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.assetName + '.txt'))
	} catch (err) {
		return res.send({statusCode: 500, message: `Internal error: ${err}`})
	}
	return res.send({statusCode: 200, message: 'OK'})
})

app.listen(API_PORT, () => console.log('API has started!'))

function isSafeFile(fileName) {
	return (fileName.endsWith('.txt') || fileName.endsWith('.jpg') || fileName.endsWith('.png'))
}