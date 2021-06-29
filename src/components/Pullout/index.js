import React, { useState } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { PulloutContainer, Icon, CloseIcon, PulloutWrapper, PulloutTitle, PulloutCard, PulloutCardIcon, PulloutCardTitle, PulloutCardPreviewDesc, PulloutCardViewMoreBtn, PulloutCardExpanded } from './PulloutElements'

const Pullout = ({ title, cards }) => {
	const [pulloutIsOpen, setPulloutIsOpen] = useState(false)

	const togglePullout = () => setPulloutIsOpen(!pulloutIsOpen)

	const [activePullout, setActivePullout] = useState(0)
	
	const state = {
		activePullout: activePullout,
		setActivePullout: setActivePullout,
		// TODO: add an index key so props know what to set the state to when toggled
	}
	return (
		<>
		<PulloutCardExpanded card={card} state={state} isopen={pulloutIsOpen}/>

		<PulloutContainer isOpen={pulloutIsOpen} onClick={togglePullout}>
			<Icon isOpen={pulloutIsOpen} onClick={togglePullout}>
				<AiOutlineDoubleRight />
			</Icon>
			<CloseIcon isOpen={pulloutIsOpen} onClick={togglePullout}/>
			<PulloutTitle>{title}</PulloutTitle>

			<PulloutWrapper>
				
				{
					cards.map(card => {
						return (<>
						<PulloutCard>
							<PulloutCardIcon src={card.icon}/>
							<PulloutCardTitle>{card.title}</PulloutCardTitle>
							<PulloutCardPreviewDesc>{card.previewDescription}</PulloutCardPreviewDesc>
							<PulloutCardViewMoreBtn>
								<FaArrowCircleRight />
							</PulloutCardViewMoreBtn>
						</PulloutCard>
						</>)
					})
				}
				
			</PulloutWrapper>
		</PulloutContainer>
		</>
	)
}

export default Pullout
