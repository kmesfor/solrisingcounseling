import styled from 'styled-components'
import Iframe from 'react-iframe'
import { FaRegSave } from 'react-icons/fa'

//TODO: add AdminIFrame that ports in current siteData not from getSiteData() to see a preview, will
// require some restructuring of the app component to either take in siteData or get it manually if not provided
export const AdminIFrame = styled(Iframe)`
`

// noinspection SpellCheckingInspection
export const AdminPanelSaveBtn = styled(FaRegSave)`
  width: 2.5vw;
  height: 2.5vw;
  
  @media screen and (max-width: 786px) {  
	width: 4vw;
	height: 4vw;
  }
  color: ${({isactive}) => ((isactive) ? 'var(--hl)' : 'rgba(var(--bg-no-rgba), 0.4)')};
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
// TODO: add additional css to make the button more interactive and in right location
