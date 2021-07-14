import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './config.json'
import loadSiteData from './loadSiteData';


async function main() {
	try {
		await fetch(config.API.BASE + config.API.GET_CONFIG, {
			method: 'GET',
		}).then(async (result) => {
			result = await result.json()
			console.log(result)
			if (result.statusCode === 200 && result.message === 'OK') {
				if (result.data.is_in_maintenance) {
					ReactDOM.render(
						<React.StrictMode>
							<h1>Site is currently in maintenance. Please try again later</h1>
						</React.StrictMode>,
						document.getElementById('root')
					)
				} else {
					ReactDOM.render(
						<React.StrictMode>
							<App />
						</React.StrictMode>,
						document.getElementById('root')
					)
					loadSiteData(result.data)
				}
	
			} else {
				ReactDOM.render(
					<React.StrictMode>
						<h1>Failed to connect to server. Please try again later</h1>
					</React.StrictMode>,
						document.getElementById('root')
				)
			}
		})
	} catch (err) {
		ReactDOM.render(
			<React.StrictMode>
				<h1>Failed to connect to server. Please try again later</h1>
			</React.StrictMode>,
			document.getElementById('root')
		)
	}
}

main()