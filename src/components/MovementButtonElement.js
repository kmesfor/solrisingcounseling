import styled from 'styled-components'
import { Link } from 'react-scroll'

const MovementButton = styled(Link)`
	outline: none;
	border: none;
	border-radius: 50px;
	cursor: pointer;
	display: ${({movementButtonIsVisible}) => (movementButtonIsVisible ? 'flex' : 'none')};;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 998;

	background: var(--bg);
	color: var(--fg);
	opacity: 45%;
	padding: 18px 20px;
	bottom: 100px;
	right: 120px;
	font-size: 20px;
	transition: all 0.2s ease-in-out;

	@media screen and (max-width: 786px) {
		bottom: 60px;
		right: 80px;
	}

	&:hover {
		opacity: 85%;
		color: var(--hl);
	}

	&:active {
		padding-bottom: 5px;
	}
`

export default MovementButton