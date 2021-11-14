import config from './config.json'
 
export default async function loadSiteData(siteData) {
	const root = document.querySelector(':root').style
	root.setProperty('--font', siteData.config.font)
	root.setProperty('--light-theme-bg', siteData.config.light_theme_bg)
	root.setProperty('--light-theme-fg', siteData.config.light_theme_fg)
	root.setProperty('--light-theme-hl', siteData.config.light_theme_hl)
	root.setProperty('--dark-theme-bg', siteData.config.dark_theme_bg)
	root.setProperty('--dark-theme-fg', siteData.config.dark_theme_fg)
	root.setProperty('--dark-theme-hl', siteData.config.dark_theme_hl)

	let assets = Object.keys(siteData.assets)
	// TODO: do something here
	for (let i = 0; i < assets.length; i++) {
		let result = await fetch(config.API.BASE + config.API.ASSETS + '/' + siteData.assets[assets[i]].name, {
			method: 'GET'
		})
	}
}