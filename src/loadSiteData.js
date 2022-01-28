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

	root.setProperty('--dark-theme-bg-strong', siteData.config.dark_theme_bg_strong)
	root.setProperty('--light-theme-bg-strong', siteData.config.light_theme_bg_strong)
	root.setProperty('--dark-theme-footer-bg', siteData.config.dark_theme_footer_bg)
	root.setProperty('--light-theme-footer-bg', siteData.config.light_theme_footer_bg)
	root.setProperty('--err', `rgba(${siteData.config.err}, 1)`)
}