import React, { useState } from 'react'
import { AdminPanelSaveBtn, AdminListWrapper } from './AdminPanelElements'
import ListElement from '../List'
import { convertFieldDataToSiteData } from './convertFieldDataToSiteData'

const fields = [
	{
		name: 'Pullout Entry 1',
		options: [
			{
				name: 'Title',
				value: null,
				type: 'text',
				validate: (input) => {
					return (typeof input === 'string')
				},
				siteDataRef: 'pullout_entries/${index}/title'
			},
			{
				name: 'Preview Description',
				value: null,
				type: 'dropdown',
				options: ['option 1', 'optioon 2'],
				siteDataRef: 'pullout_entries/${index}/preview_description'
			},
			{
				//TODO: make a image upload portion and all other dropdowns
				// select from uploaded images
				name: 'Image',
				value: null,
				type: 'fileselect',
				acceptedFileType: '.png, .jpg, .jpeg', //see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
				validate: (input) => {
					return true
				},
				siteDataRef: 'pullout_entries/${index}/title'
			}
		]
	},
]

const AdminPanel = ({siteData, getSiteData, setSiteData, adminPanelConfig}) => {

	function saveSiteData(siteData) {
		//api call to save siteData
		//grab auth secret to submit in post request, show animated error bar if invalid or other error
		console.log(siteData)
	}

	return (
		<div>
			<h1>admin panel</h1>
			<AdminPanelSaveBtn isactive={true} onClick={() => {saveSiteData(siteData)}} />
			<input type='text' id='admin_panel_auth_secret' />
			<AdminListWrapper>
				<ListElement title='list title' fields={fields} />
				<ListElement title='list' fields={fields} />
				<ListElement title='list title' fields={fields} />
				<ListElement title='list title' fields={fields} />
			</AdminListWrapper>
		</div>
	)
}

export default AdminPanel
