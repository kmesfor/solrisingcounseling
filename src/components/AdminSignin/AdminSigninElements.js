import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
	min-height: 692px;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	z-index: 0;
	overflow: hidden;
	background: var(--hl);
`

export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`

export const Icon = styled(Link)`
	margin-left: 32px;
	margin-top: 32px;
	text-decoration: none;
	color: var(--fg);
	font-weight: 700;
	font-size: 32px;

	@media screen and (max-width: 480px) {
		margin-left: 16px;
		margin-top: 8px;
	}
`
export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: feComponentTransfer;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`
export const Form = styled.form`
	background: var(--bg);
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	padding: 60px 32px;
	padding-bottom: 15px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}
`
export const FormH1 = styled.h1`
	margin-bottom: 20px;
	margin-top: 0px;
	color: var(--fg);
	font-size: 24px;
	font-weight: 400;
	text-align: center;
`
export const FormLink = styled(Link)`
	text-align: center;
	font-size: 16px;
	font-weight: 400;
	text-decoration: none;
	color: var(--fg);
	margin: 20px;

	&:hover {
		color: var(--hl);
	}
`

export const FormLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: var(--fg);
`

export const FormInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
	background: var(--fg);
	color: var(--bg);
`

export const FormButton = styled.button`
	background: var(--hl);
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: var(--fg);
	font-size: 20px;
	cursor: pointer;
	&:hover {
		background: var(--fg);
		color: var(--bg);
	}
`

export const Text = styled.span`
	text-align: center;
	margin-top: 24px;
	color: var(--hl);
	font-size: 14px;
`

export const FormError = styled.h3`
	background: var(--err);
	font-size: 12px;
	border: none;
	border-radius: 4px;
	color: var(--fg);
	text-align: center;
	margin-bottom: 20px;
	position: relative;
	opacity: ${({ isActive }) => (isActive ? '100%' : '0')};
	padding: ${({ isActive }) => (isActive ? '16px' : '0')};
	transition: 0.8s all ease;
`