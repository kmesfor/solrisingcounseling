import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text, FormLink, FormError } from './AdminSigninElements'
const api_routes = require('../../config.json').API


const AdminSignIn = () => {
	const [username, setUsername] = useState(undefined)
	const [password, setPassword] = useState(undefined)
	const [visibleError, setVisibleError] = useState(false)
	const [errorMessage, setErrorMessage] = useState(undefined)


	const history = useHistory()
	async function handleSubmit(event) {
		event.preventDefault()
		try {
			await fetch(api_routes.BASE + api_routes.LOGIN, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: username,
					password: password
				})
			}).then(async (res) => {
				res = await res.json()
				console.log(res)
				if (res.statusCode === 200 && res.message === 'OK') {
					history.push('/admin')
				} else {
					setErrorMessage(res.message)
					setVisibleError(true)
				}
			})
		} catch(err) {
			setErrorMessage('Failed to connect to server')
			setVisibleError(true)
		}
	}

	return (
		<>
			<Container>
				<FormWrap>
					<Icon to='/'>SITENAME</Icon>
					<FormContent>
						<Form onSubmit={handleSubmit}>
							<FormH1>Site admin sign-in</FormH1>
							<FormError isActive={visibleError}>{errorMessage}</FormError> 
							<FormLabel htmlFor='username'>Username</FormLabel>
							<FormInput onChange={event => setUsername(event.target.value)} type='text' name='username' required />
							<FormLabel htmlFor='password'>Password</FormLabel>
							<FormInput onChange={event => setPassword(event.target.value)} type='password' name='password' required />
							<FormButton>Log in</FormButton>
							<FormLink to='/'>Lost? Click here to return home</FormLink>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	)
}

export default AdminSignIn
