import React, { useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { PulloutContainer, Icon, CloseIcon, PulloutWrapper, PulloutTitle, PulloutCard, PulloutCardIcon, PulloutCardTitle, PulloutCardPreviewDesc, PulloutCardViewMoreBtn, PulloutCardExpandedWrapper, PulloutCardExpandedCloseIcon, PulloutCardExpandedBanner, PulloutCardExpandedHorizontal } from './PulloutElements'

const Pullout = ({ title, cards }) => {
	const [pulloutIsOpen, setPulloutIsOpen] = useState(false)

	const togglePullout = () => {
		setPulloutIsOpen(!pulloutIsOpen)
		setActivePullout(undefined)
	}

	const [activePullout, setActivePullout] = useState(undefined)
	
	const handleExpanded = (index) => {
		if (activePullout !== index) {
			setActivePullout(index)
		} else {
			setActivePullout(undefined)
		}
	}
	
	const state = {
		activePullout: activePullout,
		setActivePullout: setActivePullout,
	}
	return (
		<>
		{
			//render cards overtop of pullout to get rid of inherited opacity
			cards.map(card => {
				return (
					<>
						<PulloutCardExpandedWrapper card={card} state={state} isopen={pulloutIsOpen}>
							<PulloutCardExpandedCloseIcon onClick={() => setActivePullout(undefined)} />
							<PulloutCardExpandedBanner src={card.banner || card.icon} />
							<PulloutCardExpandedHorizontal />

							{/* <PulloutCardExpandedTitle />

							//show icon or optional banner image
							<PulloutCardExpandedDateLine />
							<PulloutCardExpandedBody /> */}
						</PulloutCardExpandedWrapper>
						
					</>
				)
			})
		}
		<PulloutContainer isOpen={pulloutIsOpen} expandedisopen={activePullout !== undefined}>
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
							<PulloutCardViewMoreBtn isactive={activePullout===card.index} onClick={() => {handleExpanded(card.index)}}>
								{
									activePullout===card.index ? <FaArrowCircleLeft style={{color: 'var(--hl)'}} /> : <FaArrowCircleRight />
								}
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
