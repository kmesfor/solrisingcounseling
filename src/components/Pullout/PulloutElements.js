import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const PulloutContainer = styled.aside`
	position: fixed;
	z-index: 998;
	outline: #fff;
	border: 3px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background: #262626;
	color: #fff;
	height: 100%;
	top: 0;
	font-size: 20px;

	opacity: 85%;
	left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

	transition: all 0.2s ease-in-out;

	width: 35%;
	@media screen and (max-width: 786px) {
		width: 50%;
	}
	@media screen and (max-width: 480px) {
		width: 80%;
	}
`

export const CloseIcon = styled(FaTimes)`
	color: #fff;
	position: fixed;
	z-index: 998;
	top: 30px;
	left: ${({ isOpen }) => (isOpen ? 'calc(35% - 40px)' : '-100%')};
	@media screen and (max-width: 786px) {
		left: ${({ isOpen }) => (isOpen ? 'calc(50% - 40px)' : '-100%')};
	}
	@media screen and (max-width: 480px) {
		left: ${({ isOpen }) => (isOpen ? 'calc(80% - 40px)' : '-100%')};
	}
	transition: all 0.2s ease-in-out;
`

export const Icon = styled.div`
	position: fixed;
	z-index: 998;
	outline: #fff;
	border: 3px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	background: #262626;
	color: #fff;
	opacity: 85%;
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
		color: #01bf71;
	}
`