import React from 'react'

import AdminPanel from '../components/AdminPanel'
import ScrollToTop from '../components/ScrollToTop'

const AdminPage = ({siteData, getSiteData, setSiteData}) => {

	return (
		<>
			<ScrollToTop />
			<AdminPanel siteData={siteData} getSiteData={getSiteData} setSiteData={setSiteData} adminPanelConfig={adminPanelTemplate}/>
		</>
	)
}

export default AdminPage

const adminPanelTemplate = {
	assets: {
		name: 'Asset Manager',
		canCreateFields: true,
		canDeleteFields: true,
		template: {
			value: null,
			type: 'fileselect',
			acceptedFileType: '.png, .jpg, .jpeg',
			validate: (input) => {
				return true
			}
		}
	},
	config: {
		name: 'Configuration',
		canCreateFields: false,
		canDeleteFields: false,
		template: {
			colors: {
				value: '0, 0, 0',
				type: 'text',
				validate: (input) => {
					input.replace(' ', '')
					input.split(',')
					if (input.length !== 3) return false
	
					if (isNaN(input[0]) || parseInt(input[0]) > 255) return false
					if (isNaN(input[1]) || parseInt(input[1]) > 255) return false 
					if (isNaN(input[2]) || parseInt(input[2]) > 255) return false 
				}
			},
			text: {
				value: null,
				type: 'text',
				validate: input => {
					return true
				}
			}
		}
	},
	pullout_entries: {
		name: 'Pullout Entries',
		canCreateFields: true,
		canDeleteFields: true,
		teplate: {
			options: [
				{
					name: 'Icon',
					value: null,
					type: 'dropdown',
					options: `$$all_images_array`,
					validate: (input, siteData) => {
						return siteData.assets[input] !== undefined
					}
				},
				{
					name: 'Title',
					value: null,
					type: 'text',
					validate: (input) => {
						return (typeof input === 'string')
					}
				},
			]
			
		}
	}

}