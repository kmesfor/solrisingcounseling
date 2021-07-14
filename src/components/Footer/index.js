import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements' 

const Footer = () => {
	const toggleHome = () => scroll.scrollToTop()


	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About</FooterLinkTitle>
							<FooterLink to={{ pathname: "https://google.com" }} target="_blank">Link 1</FooterLink> {/* if you want to link outside the page, use the <a> tag*/}
							<FooterLink to="/signin">Link 2</FooterLink>
							<FooterLink to="/signin">Link 3</FooterLink>
							<FooterLink to="/signin">Link 4</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Other section</FooterLinkTitle>
							<FooterLink to="/signin">Link 1</FooterLink>
							<FooterLink to="/signin">Link 2</FooterLink>
							<FooterLink to="/signin">Link 3</FooterLink>
							<FooterLink to="/signin">Link 4</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Other section 2</FooterLinkTitle>
							<FooterLink to="/signin">Link 1</FooterLink>
							<FooterLink to="/signin">Link 2</FooterLink>
							<FooterLink to="/signin">Link 3</FooterLink>
							<FooterLink to="/signin">Link 4</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Other section 3</FooterLinkTitle>
							<FooterLink to="/signin">Link 1</FooterLink>
							<FooterLink to="/signin">Link 2</FooterLink>
							<FooterLink to="/signin">Link 3</FooterLink>
							<FooterLink to="/signin">Link 4</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>Social logo</SocialLogo>
						<WebsiteRights>Website rights</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="//www.facebook.com/demo" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="//www.instagram.com/demo" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="//www.youtube.com/demo" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="//www.twitter.com/demo" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="//www.linkedin.com/demo" target="_blank" aria-label="Linkedin">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer
