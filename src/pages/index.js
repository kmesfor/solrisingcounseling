import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import MovementButton from '../components/MovementButtonElement.js'
import Pullout from '../components/Pullout'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import { AiOutlineUp } from 'react-icons/ai'

const Home = () => {

	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

	const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen)

	const [movementButtonIsVisible, setMovementButtonIsVisible] = useState(false)

	const changeMovement = () => setMovementButtonIsVisible(window.scrollY >= 800/2) //hero section height
	useEffect(() => window.addEventListener('scroll', changeMovement))
	

	return (
		<>
			{/* TODO: if screen is less than 310px wide, warn that content may appear wrong (using banner) */}
			<Sidebar isOpen={sidebarIsOpen} toggle={toggleSidebar}/>
			<Navbar toggle={toggleSidebar}/>
			<MovementButton movementButtonIsVisible={movementButtonIsVisible} to='home' smooth={true} duration={500} spy={true} exact={1} offset={-80}><AiOutlineUp /></MovementButton>
			<Pullout />
			<HeroSection id='home'/>
			<InfoSection {...homeObjOne}/>
			<InfoSection {...homeObjTwo}/>
			<Services />
			<InfoSection {...homeObjThree}/>
			<Footer />
		</>
	)
}

export default Home
