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
	z-index: 999;
`

export const AdminAssetListWrapper = styled.div`
	display: flex;
	flex-direction: row;
	row-gap: 50px;
	column-gap: 32px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 50px 16px;
`

export const AdminAssetListAssetWrapper = styled.div`
	display: flex;
	border: 6px var(--hl) solid;
	border-radius: 4px;
	padding: 32px;
	color: var(--hl);
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 16px;
`

export const AdminAssetDeleteBtn = styled(FaTrash)`
	color: var(--fg);
	font-size: 24px;
	&:hover {
		transform: scale(1.20);
		color: var(--err);
	}
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
	background: var(--hl);
	position: fixed;
	display: grid;
	grid-template-rows: 1fr;
	row-gap: 32px;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	height: calc(100% - 4vh);
	top: 2vh;
	bottom: 2vh;
	z-index: 998;
	right: ${({ isactive }) => ((isactive) ? '1vw' : '-100%')};
	transition: all 0.2s ease-in-out;
	overflow-y: scroll;
	width: calc(100% - 2vw);

`
export const AdminAssetInput = styled.input`
	width: 35%;
	height: 2.5vw;
	@media screen and (max-width: 786px) {  
		height: 5vw;
  	}
	margin-bottom: 16px;
	padding: 8px;
	border: none;
	border-radius: 4px;
	background: var(--fg);
	color: var(--bg);
	position: relative;
	left: 50%;
	transform: translateX(-50%);
`

export const AdminAssetInputLabel = styled.h2`
	align-self: center;
	color: var(--fg);
	font-size: 16px;
	font-weight: 900;
	text-align: center;
	margin-bottom: 0;
	align-self: end;
`

export const AdminAssetTypeSelect = styled.input`
	color: var(--fg);
	height: 36px;
	width: 100px;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
`

export const AdminAssetFileUpload = styled.input`
	padding: 16px;
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
	width: 65%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
`

export const AdminAssetSaveBtn = styled(FaSave)`
	padding-top: 16px;
	margin-bottom: 16px;
	color: var(--bg);
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	font-size: 50px;
	&:hover {
		color: var(--fg);
	}
`

export const AdminAssetPopupExitBtn = styled(FaTimes)`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 36px;

	color: var(--bg);
	&:hover {
		color: var(--fg)
	}
`
// TODO: add additional css to make the button more interactive and in right location
