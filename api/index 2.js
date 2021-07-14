const express = require('express')
const app = express()
const AUTH_SECRET = require('./secrets.json').AUTH_SECRET
const LOGIN_SECRET = require('./secrets.json').LOGIN_SECRET
const ASSETS_STORAGE_PATH = require('./secrets.json').ASSETS_STORAGE_PATH
const API_PORT = require('./secrets.json').API_PORT
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, path.resolve(ASSETS_STORAGE_PATH))
	},
	filename: (req, file, cb) => {
	  cb(null, file.filename)
	},
  })
const upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
	cb(null, (file.filename.endsWith('.txt') || file.filename.endsWith('.jpg') || file.filename.endsWith('.png')))
}})

/*
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
*/

app.post('/api/login', (req, res) => {
	console.log(req.body)
	if (!req.body.username) return res.send({statusCode: 401, message: 'Missing login credentials'})
	if (!req.body.password) return res.send({statusCode: 401, message: 'Missing login credentials'})

	if (req.body.username !== PASSWORD_SECRET) return res.send({statusCode: 401, message: 'Invalid login credentials'})
	if (req.body.username !== USERNAME_SECRET) return res.send({statusCode: 401, message: 'Invalid login credentials'})
	return res.send({statusCode: 200, message: 'OK'})
})

app.get('/api/assets', (req, res) => {
	if (!req.query.asset) return res.send({statusCode: 400, message: 'Missing asset field'})
	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.asset) === -1) return res.send({statusCode: 404, message: 'Asset not found'})
	return res.sendFile(path.resolve(ASSETS_STORAGE_PATH + '/' + req.query.asset))
})

app.post('/api/assets', (req, res) => {
	if (!req.query.auth) return res.send({statusCode: 400, message: 'Missing auth credentials'})
	if (!req.query.assetName) return res.send({statusCode: 400, message: 'Missing assetName field'})

	if (req.query.auth !== AUTH_SECRET) return res.send({statusCode: 401, message: 'Invalid auth credentials'})
	if (typeof req.query.assetName !== 'string') return res.send({statusCode: 400, message: 'Expected string for assetName field'})

	if (fs.readdirSync(ASSETS_STORAGE_PATH).indexOf(req.query.assetName) !== -1) return res.send({status: 409, message: 'Asset with such name already exists'})

	try {
		upload.single('uploaded_file')(req, res)
	} catch (err) {
		return res.send({statusCode: 500, message: `Internal error: ${err}`})
	}
	return res.send({statusCode: 200, message: 'OK'})
})


app.listen(API_PORT, () => console.log('API has started!'))
