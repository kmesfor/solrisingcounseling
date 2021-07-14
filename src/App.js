import './App.css';
import Home from './pages'
import AdminSignIn from './pages/admin-signin'
import Admin from './pages/admin'
import ThemeToggle from './components/ThemeToggle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import loadSiteData from './loadSiteData'
import config from './config.json'

async function App() {
	try {
		await fetch(config.API.BASE + config.API.GET_CONFIG, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		}).then(async (res) => {
			res = await res.json()
			console.log(res)
			if (res.statusCode === 200 && res.message === 'OK') {
				if (res.data.is_in_maintenance) {
					return (
						<h1>Site is currently in maintenance. Please try again later</h1>
					)
				}
				loadSiteData(res.data)
			} else {
				return (
					<h1>Failed to connect to server. Please try again</h1>
				)
			}
		})
	} catch(err) {
		return (
			<h1>Failed to connect to server. Please try again</h1>
		)
	}
	//todo: fix component console errors in web browser
	return (
		<>
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={AdminSignIn} exact />
				<Route path="/admin" component={Admin} exact />
			</Switch>
		</Router>
		<ThemeToggle/>
		</>
	);
}

export default App;
