import React, { useState } from 'react'
import { AdminPanelSaveTitle, AdminWrapper, AdminListWrapper, AdminPanelSaveWrapper, AdminPanelSaveBtn, AdminPanelAuthInput } from './AdminPanelElements'
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
				siteDataRef: 'pullout_entries/${index}/image'
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
		<AdminWrapper>
			<h1>admin panel</h1>
			<AdminPanelSaveTitle>Save changes</AdminPanelSaveTitle>
			<AdminPanelSaveWrapper>
				<AdminPanelAuthInput type='text' id='admin_panel_auth_secret' defaultValue='Insert auth token' />
				<AdminPanelSaveBtn isactive={true} onClick={() =>{saveSiteData(siteData)}}/>
			</AdminPanelSaveWrapper>
			<AdminListWrapper>
				<ListElement title='list title' fields={fields} />
				<ListElement title='list' fields={fields} />
				<ListElement title='list title' fields={fields} />
				<ListElement title='list title' fields={fields} />
			</AdminListWrapper>
		</AdminWrapper>
	)
}

export default AdminPanel
