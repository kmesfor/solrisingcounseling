import React from 'react'
import getApiFile from '../../getApiFile'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = ({sectionData, assets, cards}) => {
	console.log(cards)
	return (
		<ServicesContainer id={sectionData.container_id} dark={sectionData.uses_dark_theme}>
			<ServicesH1>{sectionData.headline}</ServicesH1>
			<ServicesWrapper>
				{cards.map(card => {
					return (
						<ServicesCard>
							{card.image !== undefined || card.image !== "" ? 
								<ServicesIcon src={getApiFile(assets[card.image].src)} />
							: null}
							<ServicesH2>{card.title}</ServicesH2>
							<ServicesP>{card.description}</ServicesP>
						</ServicesCard>
					)
				})}
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
