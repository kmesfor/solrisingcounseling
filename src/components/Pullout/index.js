import React, { useState } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { PulloutContainer, Icon, CloseIcon } from './PulloutElements'

const Pullout = ({ isOpen, toggleOpen, title, cards }) => {
	const [pulloutIsOpen, setPulloutIsOpen] = useState(false)

	const togglePullout = () => setPulloutIsOpen(!pulloutIsOpen)
	return (
		<PulloutContainer isOpen={pulloutIsOpen} onClick={togglePullout}>
			<Icon isOpen={pulloutIsOpen} onClick={togglePullout}>
				<AiOutlineDoubleRight />
				<CloseIcon isOpen={pulloutIsOpen} onClick={togglePullout}/>
			</Icon>
			{/* <PulloutWrapper>
				<PulloutTitle>{title}</PulloutTitle>
				{
					cards.forEach(card => {
						<PulloutCard>
							<PulloutCardIcon src={card.icon}/>
							<PulloutCardTitle>{card.title}</PulloutCardTitle>
							<PulloutCardPreviewDesc>{card.previewDescription}</PulloutCardPreviewDesc>
							<PulloutCardViewMoreBtn isOpen={card.isOpen} onClick={card.showFull} cardData={card}>
								<FaArrowCircleRight />
							</PulloutCardViewMoreBtn>
						</PulloutCard>
					})
				}
				
			</PulloutWrapper> */}
		</PulloutContainer>
	)
}

export default Pullout
