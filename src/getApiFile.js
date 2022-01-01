import config from './config.json'
 
export default function getApiFile(fileName) {
	// let file = await fetch(config.API.BASE + config.API.ASSETS + '/' + fileName, {
	// 	method: 'GET'
	// })
	// console.log(file)
	// return file
	return (config.API.BASE + config.API.ASSETS + '/' + fileName)
}