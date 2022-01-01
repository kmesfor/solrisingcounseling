import React, { useState } from 'react'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'
import { Button } from '../ButtonElements'
import getApiFile from '../../getApiFile'

const HomeSection = ({sectionData, assets}) => {
	const [hover, setHover] = useState(false)

	const onHover = () => setHover(!hover)
	console.log(sectionData)

	return (
		<HomeContainer id={sectionData.container_id}>
			<HomeBg>
				<VideoBg autoPlay loop muted src={getApiFile(assets[sectionData.asset].src)} alt={assets[sectionData.asset].alt} type={sectionData.asset_type} />
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
