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
	
	const [darkThemeSlider, setDarkThemeSlider] = useState(false)

	return (
		<>
			{/* TODO: if screen is less than 310px wide, warn that content may appear wrong (using banner) */}
			<Sidebar isOpen={sidebarIsOpen} toggle={toggleSidebar}/>
			<Navbar toggle={toggleSidebar}/>
			<MovementButton movementButtonIsVisible={movementButtonIsVisible} to='home' smooth={true} duration={500} spy={true} exact={1} offset={-80}><AiOutlineUp /></MovementButton>
			{/* <Slider toggle={setDarkThemeSlider}/> */}
			{/* make overridable from computer setting by using a use state that starts as that but changes */}
			<Pullout {...pulloutData}/>
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

const pulloutData = {
	title: 'Updates',
	cards: [
		{
			index: 0, 
			icon: require('../images/svg-1.svg').default,
			title: 'really really really really really really really really long title',
			previewDescription: 'really really really really really really really really long update preview description really really really really really really really really long update preview description ',
			isOpen: false,
			fullText: 'Full text here',
			date: Date.now(),
		},
		{
			index: 1,
			icon: require('../images/svg-4.svg').default,
			title: 'Headline 2',
			previewDescription: 'Update preview description',
			isOpen: false,
			fullText: 'Full text here',
			date: Date.now(),
		},
		{
			index: 2,
			icon: require('../images/svg-3.svg').default,
			title: 'Headline 3',
			previewDescription: 'Update preview description',
			isOpen: false,
			fullText: 'Full text here',
			date: Date.now(),
		},
		{
			index: 3,
			icon: require('../images/svg-2.svg').default,
			title: 'Headline 4',
			previewDescription: 'Update preview description',
			isOpen: false,
			fullText: 'Full text here',
			date: Date.now(),
		}
	]
}