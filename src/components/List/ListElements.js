import styled from 'styled-components'
import { HiOutlinePencil, HiOutlineTrash, HiOutlineDotsVertical } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'

export const ListWrapper = styled.div`
	box-shadow: 0 1px 5px rgba(0,0,0,0.2);

	border-radius: 10px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	background: var(--fg);
	color: var(--hl);
	height: auto;
	width: auto;
	max-width: 500px;
	font-size: 20px;
	transition: all 0.2s ease-in-out;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	z-index: 998;
`


export const ListTitle = styled.h1`
	color: var(--hl);
	font-size: 36px;
	text-align: center;
	height: auto;
	padding: 8px 0px;
`
export const ListFieldText = styled.p`
	color: var(--bg);
	font-size: 16px;
	position: absolute;
	align-self: flex-start;
	transition: all 0.2s ease-in-out;
	left: 8%;
`

export const ListFieldWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 60px;
	cursor: pointer;
	background: var(--fg);
	font-size: 20px;
	transition: all 0.2s ease-in-out;
	border-radius: 10px;


	&.dragging {
		opacity: 40%;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;

	&:hover {
		background: var(--hl);
	}
`
export const ListFieldEditBtn = styled(HiOutlinePencil)`
	color: var(--bg);
	position: absolute;
	align-self: flex-end;
	right: 8%;
	transform: scale(1.2);
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.45);
	}
`
export const ListFieldDeleteBtn = styled(HiOutlineTrash)`
	color: var(--bg);
	position: absolute;
	align-self: flex-end;
	right: 2%;
	transform: scale(1.2);
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.45);
	}
`
export const ListFieldReorderBtn = styled(HiOutlineDotsVertical)`
	color: var(--bg);
	transition: all 0.2s ease-in-out;
	transform: scale(1.2);
	&:hover {
		transform: scale(1.45);
	}
	cursor: move;
`

export const ListDragContainer = styled.div`
	position: absolute;
	left: 1%;
	transform: translateY(8%); //temp solution, unknown why it isnt aligning properly
`
export const ListFieldExpandedWrapper = styled.div`
	background: var(--hl);
	position: fixed;
	display: flex;
	flex-wrap: wrap;
	border-radius: 10px;
	justify-content: flex-start;
	align-content: space-between;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	height: calc(100% - 4vh);
	top: 2vh;
	bottom: 2vh;
	z-index: 998;
	right: ${({ isopen}) => ((isopen) ? '1vw' : '-100%')};
	transition: all 0.2s ease-in-out;
	overflow-y: scroll;
	width: calc(100% - 2vw);
	@media screen and (max-width: 786px) {
		flex-direction: row;
	}
`

export const ListFieldExpandedCloseBtn = styled(FaTimes)`
	color: var(--bg);
	position: fixed;
	align-self: flex-end;
	z-index: 998;
	top: 5vh;
	transform: scale(1.2);
	right: ${({isopen}) => ((isopen) ? '3vw' : '-100%')};
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.4);
		color: var(--fg);
	}
	@media screen and (max-width: 786px) {
		right: ${({isopen}) => ((isopen) ? '2.5vw' : '-100%')};
	}
`

export const ListFieldExpandedOptionWrapper = styled.div`
	box-shadow: 0 1px 5px rgba(0,0,0,0.2);
	border-radius: 10px;
	cursor: pointer;
	align-self: center;
	background: var(--fg);
	height: auto;
	width: 45%;
	font-size: 20px;
	transition: all 0.2s ease-in-out;
	margin: 10px;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr;
	z-index: 998;
	@media screen and (max-width: 786px) {
		width: calc(100% - 2vw - 6vw);
	}
`

export const ListFieldExpandedTitle = styled.h1`
	color: var(--bg);
	font-size: 16px;
	text-align: left;
	padding: 4px 0px;
`

export const ListFieldExpandedDropdown = styled.select`
	padding: 16px 16px;
	border: none;
	border-left: 2px solid;
	border-color: rgba(var(--hl-no-rgba), 0.4);
	transition: all .2s linear;
	font-family: var(--font);
	&:focus {
		outline: none;
		border: 3px rgba(var(--hl-no-rgba), 0.7) solid;
		border-radius: 10px;
	}
`

export const ListFieldExpandedDropdownOption = styled.option`
`
export const ListFieldExpandedTextInput = styled.textarea`
	padding: 16px 16px;
	border: none;
	border-left: 2px solid;
	border-color: rgba(var(--hl-no-rgba), 0.4);
	transition: all .2s linear;
	font-family: var(--font);
	&:focus {
		outline: none;
		border: 3px rgba(var(--hl-no-rgba), 0.7) solid;
		border-radius: 10px;
	}
	resize: none;
`