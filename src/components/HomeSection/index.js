// Resize event with debounce timer from https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

import React, { useState, useEffect } from 'react'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'
import { Button } from '../ButtonElements'
import getApiFile from '../../getApiFile'

const HomeSection = ({sectionData, assets}) => {
	const [hover, setHover] = useState(false)

	const onHover = () => setHover(!hover)

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	const handleResize = debounceTimer(function resize() {
		setWindowWidth(window.innerWidth)
	})


	useEffect(() => {
		handleResize()
	}, 1000)

	window.addEventListener('resize', handleResize)


	return (
		<HomeContainer id={sectionData.container_id}>
			<HomeBg>
				<VideoBg autoPlay loop muted src={windowWidth > 786 ? getApiFile(assets[sectionData.asset].src) : getApiFile(assets[sectionData.asset_mobile].src)} alt={assets[sectionData.asset].alt} type={sectionData.asset_type} />
			</HomeBg>
			<HomeContent>
				<HomeH1>{sectionData.main_content}</HomeH1>
				<HomeP>{sectionData.description}</HomeP>
				{
					sectionData.button_visible ? 
					<HomeBtnWrapper>
						<Button to={sectionData.button_navbar_link} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>{sectionData.button_text} {hover ? <ArrowForward /> : <ArrowRight />}</Button>
					</HomeBtnWrapper>
				: null
				}
			</HomeContent>
		</HomeContainer>
	)
}

export default HomeSection

function debounceTimer(runnable, delay) {
	let timer
	return _ => {
		clearTimeout(timer)
		timer = setTimeout(_ => {
			timer = null
			runnable.apply(this, arguments)
		}, delay)
	}
}