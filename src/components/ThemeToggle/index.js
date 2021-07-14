import React, {useState} from 'react'

import { Toggle, ThemeToggleContainer, ThemeToggleChecked, ThemeToggleIcon, ThemeToggleUnchecked, ThemeToggleButton, ThemeToggleInput } from './ThemeToggleElements'

const ThemeToggle = () => {

	const [isDark, setIsDark] = useState(true)

	const changeToggle = () => {
		if (isDark) {
			setIsDark(false)
			document.getElementById('root').classList.remove('dark-theme')
			document.getElementById('root').classList.add('light-theme')
		} else {
			setIsDark(true)
			document.getElementById('root').classList.add('dark-theme')
			document.getElementById('root').classList.remove('light-theme')
		}
	}

	return (
		<>
			<Toggle onClick={changeToggle}>
				<ThemeToggleContainer id='ThemeContainer' istoggled={isDark}>
					<ThemeToggleChecked istoggled={isDark}>
						<ThemeToggleIcon>🌙</ThemeToggleIcon>
					</ThemeToggleChecked>
					<ThemeToggleUnchecked istoggled={isDark}>
						<ThemeToggleIcon>🌞</ThemeToggleIcon>
					</ThemeToggleUnchecked>
				</ThemeToggleContainer>
				<ThemeToggleButton id='ThemeButton' istoggled={isDark}/>
				<ThemeToggleInput type='checkbox' aria-label='Theme Toggle Button'></ThemeToggleInput>
			</Toggle>
		</>
	)
}

export default ThemeToggle
