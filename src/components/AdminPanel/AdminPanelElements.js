import styled from 'styled-components'
import Iframe from 'react-iframe'
import { FaArrowCircleRight } from 'react-icons/fa'

//TODO: add AdminIFrame that ports in current siteData not from getSiteData() to see a preview, will
// require some restructuring of the app component to either take in siteData or get it manually if not provided
export const AdminIFrame = styled(Iframe)`
`

// noinspection SpellCheckingInspection
// export const AdminPanelSaveBtn = styled(FaRegSave)`
//   width: 2.5vw;
//   height: 2.5vw;
  
//   @media screen and (max-width: 786px) {  
// 	width: 4vw;
// 	height: 4vw;
//   }
//   color: ${({isactive}) => ((isactive) ? 'var(--hl)' : 'rgba(var(--bg-no-rgba), 0.4)')};
// `

export const AdminWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: 0;
	overflow: hidden;
	background: var(--bg);
`

export const AdminListWrapper = styled.div`
  	max-width: 1000px;
  	margin: 0 auto;
  	display: grid;
  	grid-template-columns: 1fr 1fr;
  	align-items: center;
  	grid-gap: 16px;
  	padding: 0 50px;
  	@media screen and (max-width: 786px) {  
		grid-template-columns: 1fr;
  	}

  	@media screen and (max-width: 500px) {
    	padding: 4px;
  	}
`

export const AdminPanelSaveWrapper = styled.div`
	max-width: 500px;
	margin: 10px auto;
	padding: 0 50px;
	display: flex;
	flex-direction: row-reverse;
`

export const AdminPanelAuthInput = styled.input`
	width: 100%;
	height: 2.5vw;
	@media screen and (max-width: 786px) {  
		height: 5vw;
  	}

	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
	background: var(--fg);
	color: var(--hl);
	align-self: center;
`

export const AdminPanelSaveBtn = styled(FaArrowCircleRight)`
	position: absolute;
	width: 2.5vw;
	height: 2.5vw;
	transition: all 0.2s ease-in-out;
	color: ${({isactive}) => ((isactive) ? 'var(--hl)' : 'rgba(var(--bg-no-rgba), 0.4)')};
	
	@media screen and (max-width: 786px) {  
		width: 5vw;
		height: 5vw;
  	}
	transform: scale(.8);
	&:hover {
		transform: scale(1);
	}
`

export const AdminPanelSaveTitle = styled.h1`
	align-self: center;
	margin: 0;
	color: var(--hl);
	font-size: 24px;
	font-weight: 900;
	text-align: center;
`
// TODO: add additional css to make the button more interactive and in right location
