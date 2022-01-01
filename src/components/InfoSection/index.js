import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import getApiFile from '../../getApiFile'
const InfoSection = ({sectionData, assets}) => {
	return (
		<>
			<InfoContainer lightBg={false || !sectionData.uses_dark_theme} id={sectionData.container_id}>
				<InfoWrapper>
					<InfoRow imgStart={sectionData.display_image_first}>
						<Column1>
							<TextWrapper>
								<TopLine>{sectionData.top_line}</TopLine>
								<Heading lightText={sectionData.uses_dark_theme}>{sectionData.headline}</Heading>
								<Subtitle darkText={!sectionData.uses_dark_theme}>{sectionData.subtitle}</Subtitle>
								{
									sectionData.button_visible ? 
									<BtnWrap>
										<Button to={sectionData.button_navbar_link} smooth={true} duration={500} spy={true} exact={1} offset={-80} primary={sectionData.uses_dark_theme ? 1 : 0} dark={sectionData.uses_dark_theme ? 1 : 0}>{sectionData.button_text}</Button>
									</BtnWrap>
									: null
								}
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={getApiFile(assets[sectionData.image].src)} alt={assets[sectionData.image].alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	)
}

export default InfoSection
