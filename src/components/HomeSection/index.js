import React, { useState } from 'react'
import Video from '../../videos/beach.mp4'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'
import { Button } from '../ButtonElements'

const HomeSection = () => {
	const [hover, setHover] = useState(false)

	const onHover = () => setHover(!hover)

	return (
		<HomeContainer id='home'>
			<HomeBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HomeBg>
			<HomeContent>
				<HomeH1>CATCHPHRASE</HomeH1>
				<HomeP>DESCRIPTION</HomeP>
				<HomeBtnWrapper>
					<Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
				</HomeBtnWrapper>
			</HomeContent>
		</HomeContainer>
	)
}

export default HomeSection
