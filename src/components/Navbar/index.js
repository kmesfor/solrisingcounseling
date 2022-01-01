import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinkInternal, NavLinkExternal, NavBtn, NavBtnLink } from './NavbarElements'

export const Navbar = ({ toggle, navbarData }) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => setScrollNav(window.scrollY >= 80*3) //navbar height
	useEffect(() => window.addEventListener('scroll', changeNav))

	return (
		<>
			<IconContext.Provider value={{color: 'var(--fg)' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to={navbarData.logo_navbar_link} smooth={true} duration={500} spy={true} exact={1} offset={-80}>{navbarData.logo_text}</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							{
								navbarData.links.map(link => {
									let navLink
									if (link.internal_link) {
										navLink = <NavLinkInternal to={link.link_route} smooth={true} duration={500} spy={true} exact='true' offset={-80}>{link.text}</NavLinkInternal>
									} else {
										navLink = <NavLinkExternal to={{pathname: "https://"+link.link_route}} target="_blank">{link.text}</NavLinkExternal>
									}
									return (<NavItem>{navLink}</NavItem>)
								})
							}
						</NavMenu>
						{
							navbarData.show_sign_in_button ? 
							<NavBtn>
								<NavBtnLink to='/signin'>{navbarData.sign_in_button_text}</NavBtnLink>
							</NavBtn>
							: null
							
						}
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar