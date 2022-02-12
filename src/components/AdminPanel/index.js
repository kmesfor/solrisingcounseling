import React, { useState } from 'react'
import { AdminPanelSaveTitle, AdminWrapper, AdminListWrapper, AdminPanelSaveWrapper, AdminPanelSaveBtn, AdminPanelAuthInput, AdminPanelSiteDataInput, Banner, AdminAssetListWrapper, AdminAssetDeleteBtn, AdminAssetAddBtnWrapper, AdminAssetAddBtn, AdminAssetPopupWrapper, AdminAssetInputLabel, AdminAssetInput, AdminAssetTypeSelect, AdminAssetFileUpload, AdminAssetSaveBtn, AdminAssetPopupExitBtn, AdminAssetListAssetWrapper} from './AdminPanelElements'
import ListElement from '../List'
import config from '../../config.json'
import { convertFieldDataToSiteData } from './convertFieldDataToSiteData'
import getApiFile from '../../getApiFile'
import {Icon} from '../AdminSignin/AdminSigninElements'
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

const AdminPanel = ({siteData, getSiteData, setSiteData, adminPanelConfig}) => {

	async function saveSiteData(siteData) {
		//save images
		console.log(document.getElementById('asset-manager'))

		//save siteData
		let data
		try {
			data = JSON.parse(siteData)
		} catch (err) {
			return setBanner([true, 'Invalid JSON'])
		}
		console.log(data)
		try {
			let result = await fetch(config.API.BASE + config.API.CONFIG, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					auth: document.getElementById('admin_panel_auth_secret').value,
					data: data
				})
			})

			result = await result.json()
			console.log(result)
			if (result.statusCode !== 200) {
				return setBanner([true, result.message])
			} else {
				return setBanner([false, 'Save successful!'])
			}
		} catch (err) {
			return setBanner([true, `Error saving data: ${err}`])
		}
	}

	async function saveAssetUpload() {
		let name = document.getElementById('admin-asset-name').value
		let alt = document.getElementById('admin-asset-alt').value
		let isImage = document.getElementById('admin-asset-is-image').value === 'on'
		let file = document.getElementById('admin-asset-file-upload').files[0]
		let auth = document.getElementById('admin-asset-auth').value

		if (name === undefined || alt === undefined || isImage === undefined || file === undefined || auth === undefined) return setBanner([true, 'Asset upload form is not complete!'])
		const formData = new FormData()
		formData.append('file', file)
		formData.append('name', name)
		formData.append('alt', alt)
		formData.append('isImage', isImage)
		formData.append('auth', auth)

		try {
			let res = await fetch(config.API.BASE + config.API.CREATE_ASSET, {
				method: 'POST',
				body: formData
			})
			res = await res.json()

			if (res.statusCode === 200) return setBanner([false, 'Success! Reload the page to see updates']) 
			else return setBanner([true, `Error: ${res.message}`])
		} catch (err) {
			console.log(err)
			return setBanner([true, err])
		}

	}
	// [boolean, string] -> [isError, errorMessage]
	const [banner, setUseStateBanner] = useState([])
	const [isActive, setIsActive] = useState(false)

	function setBanner(value) {
		setUseStateBanner(value)
		setTimeout(() => {setUseStateBanner([])}, 3000)
	}
	return (
		<AdminWrapper>
			<Icon to='/'>{siteData.social_media.logo_text}</Icon>
			<AdminPanelSaveTitle>Admin Panel</AdminPanelSaveTitle>
			{
				banner.length > 0 ? <Banner isactive={true} iserr={banner[0]}>{banner[1]}</Banner> : <Banner isactive={false} iserr={null} />
			}
			<AdminPanelSaveTitle>Save changes</AdminPanelSaveTitle>
			<AdminPanelSaveWrapper>
				<Editor value={null} onChange={(value) => console.log(value)} />
				<AdminPanelAuthInput type='text' id='admin_panel_auth_secret' defaultValue='Authorization token' />
				<AdminPanelSaveBtn isactive={true} onClick={() =>{saveSiteData(document.getElementById('site-data-input').value)}}/>
			</AdminPanelSaveWrapper>
			<AdminPanelSiteDataInput id='site-data-input' defaultValue={JSON.stringify(siteData, null, 4)}/>
			<AdminPanelSaveTitle>Asset Manager</AdminPanelSaveTitle>
			
			<AdminAssetAddBtnWrapper>
				<AdminAssetAddBtn onClick={() => setIsActive(!isActive)}>
					Add Asset
				</AdminAssetAddBtn>
			</AdminAssetAddBtnWrapper>
			<AdminAssetInputLabel>Authorization</AdminAssetInputLabel>
			<AdminAssetInput id='admin-asset-auth' defaultValue='Authorization token'/>

			<AdminAssetListWrapper>
				{
					/*
						let asset = {
							name: 'name',
							isImage: true, //else video,
							src: '/Users/kianmesforush/Desktop/Code/solrisingcounseling/api-assets/assets/icon_svg',
							alt: 'alt text',
						}
					*/
					Object.keys(siteData.assets).map(asset => {
						let name = asset
						asset = siteData.assets[asset]
						let assetTag
						if (asset.isImage) {
							assetTag = <img src={getApiFile(asset.src)} alt={asset.alt} height='100px' width='100px'/>
						} else {
							assetTag = <video src={getApiFile(asset.src)} alt={asset.alt} height='100px' width='100px'/>
						}

						return (
							<AdminAssetListAssetWrapper>
								<p>{name}</p>
								{assetTag}
								<AdminAssetDeleteBtn onClick={async () => {
									const assetName = Object.keys(siteData.assets).find(key => siteData.assets[key] === asset);
									if (!assetName) return
									try {
										let res = await fetch(config.API.BASE + config.API.DELETE_ASSET, {
											method: 'POST',
											headers: {
												'Content-Type': 'application/json',
											},
											body: JSON.stringify({
												name: assetName,
												auth: document.getElementById('admin-asset-auth').value
											})
										})	
										res = await res.json()
										if (res.statusCode !== 200) return setBanner([true, 'Error: ' + res.message])
										else return setBanner([false, 'Success! Reload the page to see updates'])
									} catch (err) {
										return setBanner([true, 'Error: ' + err])
									}
								}} />
							</AdminAssetListAssetWrapper>
						)
					})
				}
			</AdminAssetListWrapper>
			
			<AdminAssetPopupWrapper isactive={isActive}>
				<AdminAssetInputLabel>Asset Name</AdminAssetInputLabel>
				<AdminAssetInput id='admin-asset-name' />
				<AdminAssetInputLabel>Asset Alternate Text</AdminAssetInputLabel>
				<AdminAssetInput id='admin-asset-alt' />
				<AdminAssetInputLabel>Asset is image?</AdminAssetInputLabel>
				<AdminAssetTypeSelect id='admin-asset-is-image' type='checkbox'/>
				<AdminAssetFileUpload id='admin-asset-file-upload' type='file' accept='.png,.jpg,.jpeg,.mp4,.mp3,.svg' />
				<AdminAssetSaveBtn onClick={() => saveAssetUpload()}/>
				<AdminAssetPopupExitBtn onClick={() => setIsActive(!isActive)}/>
			</AdminAssetPopupWrapper>
			{/* <AdminListWrapper> */}
				{/* <ListElement id='asset-manager' title='Asset Manager' fields={getAssetFieldsFromSiteData(siteData)} /> */}
				{/* <ListElement title='list' fields={fields} />
				<ListElement title='list title' fields={fields} />
				<ListElement title='list title' fields={fields} /> */}
			{/* </AdminListWrapper> */}
		</AdminWrapper>
	)
}

export default AdminPanel

// function getAssetFieldsFromSiteData(siteData) {

// 	return [
// 		{
// 			name: 'Test Asset',
// 			options: [
// 				{
// 					name: 'Asset',
// 					value: null,
// 					type: 'fileselect',
// 					acceptedFileType: '.png, .jpg, .jpeg', //see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
// 				},
// 				{
// 					name: 'Asset Name',
// 					value: '<asset name>',
// 					type: 'text',
// 					validate: (input) => {
// 						return siteData.assets[input] !== undefined
// 					}
// 				}
// 			]
// 		}
// 	]
// }

//const fields = [
	// 	{
	// 		name: 'Pullout Entry 1',
	// 		options: [
	// 			{
	// 				name: 'Title',
	// 				value: null,
	// 				type: 'text',
	// 				validate: (input) => {
	// 					return (typeof input === 'string')
	// 				},
	// 				siteDataRef: 'pullout_entries/${index}/title'
	// 			},
	// 			{
	// 				name: 'Preview Description',
	// 				value: null,
	// 				type: 'dropdown',
	// 				options: ['option 1', 'optioon 2'],
	// 				siteDataRef: 'pullout_entries/${index}/preview_description'
	// 			},
	// 			{
	// 				//TODO: make a image upload portion and all other dropdowns
	// 				// select from uploaded images
	// 				name: 'Image',
	// 				value: null,
	// 				type: 'fileselect',
	// 				acceptedFileType: '.png, .jpg, .jpeg', //see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
	// 				validate: (input) => {
	// 					return true
	// 				},
	// 				siteDataRef: 'pullout_entries/${index}/image'
	// 			}
	// 		]
	// 	},
	// ]