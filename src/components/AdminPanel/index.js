import React from 'react'
import { AdminIFrame } from './AdminPanelElements'
import ListElement from '../List'

const fields = [
	{
		name: 'Pullout Entry 1',
		options: [
			{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			},
		]
	},
	{
		name: 'Pullout Entry 2',
		options: [
			{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			}
		]
	},
	{
		name: 'Pullout Entry 3',
		options: [
			{
				name: 'Title',
				isDropdown: false,
				suggestions: ['Pullout Entry Title', 'hi'],
				validate: (input) => {
					return (typeof input === 'string')
				}
			},
			{
				name: 'Title 2',
				isDropdown: true,
				options: ['option 1', 'optioon 2']
			}
		]
	}
]

const AdminPanel = () => {
	return (
		<div>
			<h1>admin panel</h1>

			{/* preview page 
			might add a new endpoint like/demo-site that has the updated stuff, or just update the stuff from
			the dom manually, must be client side though*/}
			{/* <AdminIFrame id='AdminIFrame'src='http://localhost:3000' width='400' height='500' sandbox=''/> */}
			<ListElement title='list title' fields={fields}/>
		</div>
	)
}

export default AdminPanel
