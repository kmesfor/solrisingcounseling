import config from './config.json'
 
export default async function loadSiteData(siteData) {
	const root = document.querySelector(':root').style
	root.setProperty('--font', siteData.config.font)
	root.setProperty('--light-theme-bg', siteData.config.light_theme_background)
	root.setProperty('--light-theme-fg', siteData.config.light_theme_foreground)
	root.setProperty('--light-theme-hl', siteData.config.light_theme_highlight)
	root.setProperty('--dark-theme-bg', siteData.config.dark_theme_background)
	root.setProperty('--dark-theme-fg', siteData.config.dark_theme_foreground)
	root.setProperty('--dark-theme-hl', siteData.config.dark_theme_highlight)

	let assets = Object.keys(siteData.assets)
	console.log(assets)
	for (let i = 0; i < assets.length; i++) {
		let result = await fetch(config.API.BASE + config.API.ASSETS + '/' + siteData.assets[assets[i]].name, {
			method: 'GET'
		})
		console.log(result)
	}
}