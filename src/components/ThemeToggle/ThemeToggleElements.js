import styled from 'styled-components'

export const Toggle = styled.div`
	touch-action: pan-x;
	display: inline-block;
	position: fixed;
	bottom: 20px;
	right: 20px;
	cursor: pointer;
	background-color: transparent;
	border: 0;
	padding: 0;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-tap-highlight-color: transparent;
	z-index: 998;
	opacity: 85%;
	&:hover {
		opacity: 100%;
	}
	&:hover #ThemeContainer  {
		background-color: var(--hl);
	}
	&:hover #ThemeButton  {
		border: 1px solid var(--hl);
	}
`

export const ThemeToggleContainer = styled.div`
	width: 50px;
	height: 24px;
	padding: 0;
	border-radius: 30px;
	background-color: var(--bg);
	transition: all .2s ease;
`

export const ThemeToggleChecked = styled.div`
	position: absolute;
	width: 10px;
	height: 10px;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
	line-height: 0;
	opacity: ${({ istoggled }) => (istoggled ? '1' : '0')};
	transition: opacity .25s ease;
	left: 8px;
`

export const ThemeToggleIcon = styled.span`
	align-items: center;
	display: flex;
	height: 10px;
	justify-content: center;
	position: relative;
	width: 10px;
`

export const ThemeToggleUnchecked = styled.div`
	position: absolute;
	width: 10px;
	height: 10px;
	top: 0;
	bottom: 0;
	margin-top: auto;
	margin-bottom: auto;
	line-height: 0;
	opacity: ${({ istoggled }) => (istoggled ? '0' : '1')};;
	transition: opacity .25s ease;
	right: 10px;
`

export const ThemeToggleButton = styled.div`
	transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
	position: absolute;
	top: 1px;
	left: ${({ istoggled }) => (istoggled ? '27px' : '1px')};;
	width: 22px;
	height: 22px;
	border: 1px solid var(--bg);
	border-radius: 50%;
	background-color: var(--fg);
	box-sizing: border-box;
	transition: all .25s ease;
`

export const ThemeToggleInput = styled.input`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`

