import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const PulloutContainer = styled.aside`
	position: fixed;
	z-index: 998;
	outline: var(--textColor);
	border: 3px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background: var(--bgColor);
	color: var(--textColor);
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
	color: var(--textColor);
	position: relative;
	z-index: 998;
	top: 30px;
	left: ${({ isOpen }) => (isOpen ? 'calc(100% - 40px)' : '-100%')};
	transition: all 0.2s ease-in-out;
`

export const Icon = styled.div`
	position: fixed;
	z-index: 997;
	outline: var(--textColor);
	border: 3px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background: var(--bgColor);
	color: var(--textColor);
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
		color: var(--highlightColor);
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
	background: var(--textColor);
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
	color: var(--textColor);
	margin-bottom: 64px;
	top: 8%;
	position: relative;
	text-align: center;
	text-transform: uppercase;
	border-bottom: 3px solid var(--highlightColor);
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
	color: var(--highlightColor);
`

export const PulloutCardPreviewDesc = styled.p`
	font-size: .75rem;
	text-align: center;
	color: var(--bgColor);
	margin-bottom: 10px;
	padding: 5px 10px;
`

export const PulloutCardViewMoreBtn = styled.div`
	background-color: var(--bgColor);
	padding: 10px;
	border: 3px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
 	background: var(--bgColor);
	color: var(--textColor);
	&:hover {
		color: var(--highlightColor);
	}
`
export const PulloutCardExpanded = styled.div`
	background-color: red;
	position: absolute;
	height: auto;
	top: 1vh;
	bottom: 1vh;

	width: 100px;
	z-index: 998;
	display: ${({ state, card, isopen }) => ((state.activePullout === card.index) && (isopen) ? 'flex' : 'none')};
	transition: all 0.2s ease-in-out;
`