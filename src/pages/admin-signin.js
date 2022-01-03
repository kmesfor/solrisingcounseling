import React from 'react'

import AdminSignIn from '../components/AdminSignin'
import ScrollToTop from '../components/ScrollToTop'

const AdminSignInPage = ({siteData}) => {

	return (
		<>
			<ScrollToTop />
			<AdminSignIn siteData={siteData} />
		</>
	)
}

export default AdminSignInPage
