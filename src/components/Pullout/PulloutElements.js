import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const PulloutContainer = styled.aside`
	position: fixed;
	z-index: 997;
	outline: var(--fg);
	border: 3px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background: var(--bg);
	color: var(--fg);
	height: 100%;
	top: 0;
	font-size: 20px;
	opacity: 95%;
	left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	transition: all 0.2s ease-in-out;
	width: 35%;
	overflow-y: auto;
	overflow-x: hidden;

	@media screen and (max-width: 786px) {
		width: 50%;
	}
	@media screen and (max-width: 480px) {
		width: 80%;
	}
`

export const CloseIcon = styled(FaTimes)`
	color: var(--fg);
	position: relative;
	z-index: 997;
	top: 30px;
	left: ${({ isOpen }) => (isOpen ? 'calc(100% - 40px)' : '-100%')};
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.2);
		color: var(--hl);
	}
`

export const Icon = styled.div`
	position: fixed;
	z-index: 996;
	outline: var(--fg);
	border: 3px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background: var(--bg);
	color: var(--fg);
	padding: 20px 20px;
	top: 65%;
	font-size: 20px;
	transition: all 0.2s ease-in-out;

	left: ${({ isOpen }) => (isOpen ? '35%' : '0')};


	@media screen and (max-width: 786px) {
		left: ${({ isOpen }) => (isOpen ? '50%' : '0')};
	}
	@media screen and (max-width: 480px) {
		left: ${({ isOpen }) => (isOpen ? '80%' : '0')};
	}

	&:active {
		padding: ${({ isOpen }) => (isOpen ? '20px 12px' : '20px 28px')};
	}

	&:hover {
		color: var(--hl);
	}
`

export const PulloutWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	align-items: center;
	grid-gap: 16px;
	grid-template-columns: 1fr;
	padding: 16px 20px;
`
export const PulloutCard = styled.div`
	background: var(--fg);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	border-radius: 10px;
	height: auto;
	padding-top: 20px;
	padding-bottom: 20px;
	width: 30vw;
	@media screen and (max-width: 786px) {
		width: 40vw;
	}

	@media screen and (max-width: 480px) {
		width: 70vw;
	}
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`
export const PulloutTitle = styled.h1`
	font-size: 2.5rem;
	color: var(--fg);
	margin-bottom: 64px;
	top: 8%;
	position: relative;
	text-align: center;
	text-transform: uppercase;
	border-bottom: 3px solid var(--hl);
	padding-bottom: 24px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const PulloutCardIcon = styled.img`
	position: relative;
	max-height: 120px;
	width: 20vw; 
	@media screen and (max-width: 786px) {
		width: 30vw;
	}

	@media screen and (max-width: 480px) {
		width: 60vw;
	}
	margin-bottom: 10px;
`

export const PulloutCardTitle = styled.h2`
	font-size: 1.25rem;
	margin-bottom: 10px;
	padding: 5px 10px;
	text-align: center;
	color: var(--hl);
`

export const PulloutCardPreviewDesc = styled.p`
	font-size: .75rem;
	text-align: center;
	color: var(--bg);
	margin-bottom: 10px;
	padding: 5px 10px;
`

export const PulloutCardViewMoreBtn = styled.div`
	background-color: var(--bg);
	padding: 10px;
	border: 3px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	margin: auto;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
 	background: var(--bg);
	&:hover {
		color: var(--hl);
	}

`
export const PulloutCardExpandedWrapper = styled.div`
	background: var(--fg);
	position: fixed;
	align-items: center;
	justify-content: top;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	height: calc(100% - 4vh); //whole page - top and bottom offset
	top: 2vh;
	bottom: 2vh;
	z-index: 998;
	right: ${({ state, card, isopen }) => ((state.activePullout === card.index) && (isopen) ? '1vw' : '-100%')};
	transition: all 0.2s ease-in-out;

	width: calc(100% - 35% - 2vw - 40px - 16px - 2px); //whole page - size of pullout - 2vw offset - tab offset (last 3)
	@media screen and (max-width: 786px) {
		width: calc(100% - 2vw) //whole page - 2vw offset (will override panel)
	}
`

export const PulloutCardExpandedCloseIcon = styled(FaTimes)`
	color: var(--bg);
	position: relative;
	align-self: flex-end;
	z-index: 997;
	top: 4vh;
	right: 1.5vw;
	transform: scale(1.2);
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.4);
		color: var(--hl);
	}
`

export const PulloutCardExpandedBanner = styled.img`
	top: 8%;
	position: relative;
	margin-top: 2vh;
	align-content: center;
	width: 100%;
	height: auto;
	max-height: 30vh;
`

export const PulloutCardExpandedHorizontal = styled.hr`
	position: relative;
	height: 400px;
	color: var(--bg);
	background-color: var(--bg);
`