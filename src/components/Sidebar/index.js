import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinkInternal, SidebarLinkExternal, SideBtnWrap, SidebarRoute } from './SidebarElements'


//TODO: get data from navbar options
const Sidebar = ({ isOpen, toggle, sidebarData }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					{
						sidebarData.links.map(link => {
							if (link.internal_link) {
								return <SidebarLinkInternal to={link.link_route} onClick={toggle}>{link.text}</SidebarLinkInternal>
							} else {
								return <SidebarLinkExternal to={{pathname: "https://"+link.link_route}} target="_blank">{link.text}</SidebarLinkExternal>
							}
						})
					}
				</SidebarMenu>
				{
					sidebarData.show_sign_in_button ?
					<SideBtnWrap>
						<SidebarRoute to='/signin'>{sidebarData.sign_in_button_text}</SidebarRoute>
					</SideBtnWrap>
					: null
				}
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
