import './App.css';
import Home from './pages'
import AdminSignIn from './pages/admin-signin'
import Admin from './pages/admin'
import ThemeToggle from './components/ThemeToggle'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import config from './config.json'
import loadSiteData from './loadSiteData'

const siteStatuses = {
	loading: 0,
	inMaintenance: -1,
	active: 1,
	failed: -99
}

function App() {
	

	useEffect(async () => {
		if(siteData === undefined) {
			await handleSiteData(await getSiteData())
		}
	}, [])

	async function handleSiteData(siteData) {
		if (siteData.statusCode === 200 && siteData.message === 'OK') {
			if (siteData.data.is_in_maintenance) {
				setSiteStatus(siteStatuses.inMaintenance)
			} else {
				setSiteStatus(siteStatuses.active)
				await loadSiteData(siteData.data)
				setSiteData(siteData.data)
			}
		} else {
			setSiteStatus(siteStatuses.failed)
			alert(siteData.message)
		}
	}
	async function getSiteData() {
		try {
			let result = await fetch(config.API.BASE + config.API.CONFIG, {
				method: 'GET',
			})
			return await result.json()
		} catch (err) {
			setSiteStatus(siteStatuses.failed)
		}
	}


	const [siteData, setSiteData] = useState(undefined)
	const [siteStatus, setSiteStatus] = useState(siteStatuses.loading)

	//todo: fix component console errors in web browser
	return (
		<>
		{siteStatus === siteStatuses.loading ? 
			<h1>Loading...</h1> 
		: siteStatus === siteStatuses.inMaintenance ? 
			<h1>Site is currently in maintenance. Please try again later</h1> 
		: siteStatus === siteStatuses.failed ? 
			<h1>Internal server error. Please try again</h1>
		: siteData === undefined ? 
		<h1>Loading...</h1>
		: <>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Home siteData={siteData} />
					</Route>
					<Route path='/signin' exact>
						<AdminSignIn siteData={siteData} />
					</Route>
					<Route path='/admin' exact>
						<Admin siteData={siteData} getSiteData={getSiteData} setSiteData={setSiteData} />
					</Route>
					<Redirect to='/' />
				</Switch>
			</Router>
			<ThemeToggle/>
		</>
		}
		</>
	);
}

export default App;
