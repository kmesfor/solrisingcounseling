// const siteData = require('../site_data.example.json')
export default function loadSiteData(siteData) {

	//dark theme
	const dark_theme_elements = document.getElementsByClassName('dark-theme')
	for (let i = 0; i < dark_theme_elements.length; i++) {
		dark_theme_elements[i].style.setProperty('--bg', siteData.config.dark_theme_background)
		dark_theme_elements[i].style.setProperty('--fg', siteData.config.dark_theme_foreground)
		dark_theme_elements[i].style.setProperty('--hl', siteData.config.dark_theme_highlight)
	}

	//light theme
	const light_theme_elements = document.getElementsByClassName('light-theme')
	for (let i = 0; i < light_theme_elements.length; i++) {
		light_theme_elements[i].style.setProperty('--bg', siteData.config.light_theme_background)
		light_theme_elements[i].style.setProperty('--fg', siteData.config.light_theme_foreground)
		light_theme_elements[i].style.setProperty('--hl', siteData.config.light_theme_highlight)
	}

	const all = document.body.querySelectorAll('*')
	all.style.setProperty('--font', siteData.config.font)

}