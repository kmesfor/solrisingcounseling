import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

export const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => setScrollNav(window.scrollY >= 80*3) //navbar height
	useEffect(() => window.addEventListener('scroll', changeNav))

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to='home' smooth={true} duration={500} spy={true} exact={1} offset={-80}>SITENAME</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink to='/signin'>Sign In</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar