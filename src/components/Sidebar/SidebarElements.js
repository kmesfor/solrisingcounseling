import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: var(--bg-str);
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
	color: var(--fg);
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`

export const SidebarWrapper = styled.div`
	color: var(--fg);
`

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`

export const SidebarLinkInternal = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: var(--fg);
	cursor: pointer;

	&:hover {
		color: var(--hl);
		transition: 0.2s ease-in-out;
	}
`
export const SidebarLinkExternal = styled(LinkR)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: var(--fg);
	cursor: pointer;

	&:hover {
		color: var(--hl);
		transition: 0.2s ease-in-out;
	}
`

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
	border-radius: 50px;
	background: var(--hl);
	white-space: nowrap;
	padding: 16px 64px;
	color: var(--bg);
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: var(--fg);
		color: var(--bg);
	}
`