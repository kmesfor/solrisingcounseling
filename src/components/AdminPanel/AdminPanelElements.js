import styled from 'styled-components'
import Iframe from 'react-iframe'
import { FaArrowCircleRight, FaTrash, FaSave, FaTimes } from 'react-icons/fa'

//TODO: add AdminIFrame that ports in current siteData not from getSiteData() to see a preview, will
// require some restructuring of the app component to either take in siteData or get it manually if not provided
export const AdminIFrame = styled(Iframe)`
`

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
	overflow-y: scroll;
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
	padding: 12px;
`

export const AdminPanelSiteDataInput = styled.textarea`
	width: 75%;
	min-height: 350px;
	max-height: 60%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 4px;
	background: var(--fg);
	color: var(--bg);
	vertical-align: top;
	resize: none;
	margin-bottom: 30px;
`

export const Banner = styled.h3`
	background: ${({ iserr }) => (iserr ? 'var(--err)' : iserr === false ? 'var(--hl)' : 'none')};
	font-size: 12px;
	border: none;
	border-radius: 4px;
	color: var(--fg);
	text-align: center;
	margin: 10px;
	position: relative;
	opacity: ${({ isactive }) => (isactive ? '100%' : '0')};
	padding: ${({ isactive }) => (isactive ? '16px' : '0')};
	width: 75%;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	transition: 0.8s all ease;
`

export const AdminAssetListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 50px;
	margin: 50px;
	justify-content: left;
	row-gap: 50px;
	column-gap: 50px;
`

export const AdminAssetDeleteBtn = styled(FaTrash)`
`

export const AdminAssetAddBtn = styled.p`
	margin: 0;
	color: var(--bg);
	font-size: 24px;
	font-weight: 900;
	text-align: center;
`

export const AdminAssetAddBtnWrapper = styled.div`
	width: 65%;
	height: 4vw;
	@media screen and (max-width: 786px) {  
		height: 5vw;
  	}

	padding: 16px;
	margin: 2%;
	border: none;
	border-radius: 4px;
	background: var(--hl);
	color: var(--bg);
	position: relative;
	left: 50%;
	transform: translateX(-52.5%);
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;

	&:hover {
		background: var(--fg);
	}
	&:hover ${AdminAssetAddBtn} {
		color: var(--hl);
	}
`

export const AdminAssetPopupWrapper = styled.div`
`
export const AdminAssetInput = styled.input`
`

export const AdminAssetInputLabel = styled.h2`
`

export const AdminAssetTypeSelect = styled.input`
`

export const AdminAssetFileUpload = styled.input`
	padding: 16px 16px;
	border: none;
	border-left: 2px solid;
	border-color: rgba(var(--hl-no-rgba), 0.4);
	transition: all .2s linear;
	background-color: var(--fg);
	font-family: var(--font);
	&:focus {
		outline: none;
		border: 3px rgba(var(--hl-no-rgba), 0.7) solid;
		border-radius: 10px;
	}
`

export const AdminAssetSaveBtn = styled(FaSave)`
`

export const AdminAssetPopupExitBtn = styled(FaTimes)`
`
// TODO: add additional css to make the button more interactive and in right location
