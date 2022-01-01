import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaLink, FaSnapchatGhost } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLinkInternal, FooterLinkExternal, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements' 

const Footer = ({footerData, socialData}) => {
	const toggleHome = () => scroll.scrollToTop()


	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						{
							footerData.sections.map(section => {
								return <FooterLinkItems>
								
								<FooterLinkTitle>{section.title}</FooterLinkTitle>
								{
									footerData.links.map(link => {
										if (link.parent_id === section.id) {
											if (link.internal_link) {
												return <FooterLinkInternal to={link.link_route} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{link.text}</FooterLinkInternal>
											} else {
												return <FooterLinkExternal to={{pathname: "https://"+link.link_route}} target="_blank">{link.text}</FooterLinkExternal>
											}
										}
									})

								}
							
								</FooterLinkItems>
							})
						}
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>{socialData.logo_text}</SocialLogo>
						<WebsiteRights>{socialData.website_rights}</WebsiteRights>
						<WebsiteRights>Design adapted from <FooterLinkExternal to={{ pathname: "https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A" }} target="_blank">Brian Design</FooterLinkExternal></WebsiteRights>
						<SocialIcons>
							{
								socialData.links.map(link => {
									let icon = <FaLink />
									if (link.icon.toLowerCase() === 'facebook') {
										icon = <FaFacebook />
									} else if (link.icon.toLowerCase() === 'instagram') {
										icon = <FaInstagram />
									} else if (link.icon.toLowerCase() === 'youtube') {
										icon = <FaYoutube />
									} else if (link.icon.toLowerCase() === 'twitter') {
										icon = <FaTwitter />
									} else if (link.icon.toLowerCase() === 'linkedin') {
										icon = <FaLinkedin />
									} else if (link.icon.toLowerCase() === 'snapchat') {
										icon = <FaSnapchatGhost />
									}

									return <SocialIconLink href={link.link} target="_blank" aria-label={link.icon}>
										{icon}
									</SocialIconLink>
								})
							}
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
