import React from 'react'
import { AdminIFrame } from './AdminPanelElements'

const AdminPanel = () => {
	return (
		<div>
			<h1>admin panel</h1>

			{/* preview page 
			might add a new endpoint like/demo-site that has the updated stuff, or just update the stuff from
			the dom manually, must be client side though*/}
			<AdminIFrame id='AdminIFrame'src='http://localhost:3000' width='400' height='500' sandbox=''/>
		</div>
	)
}

export default AdminPanel
