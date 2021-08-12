//TODO: Make script add value prop automatically
// and save prop too

//TODO: for list: use fieldTemplateOptions on + btn
// to select a datatype

//TODO: if validate returns false display an error
// similar to the signin error

//TODO: if no validate function, expect return true
//TODO: add optional buttons for section rendering
//TODO: use navbar data for mobile sidebar section
//TODO: use sitedata.config.is_in_maintenance
// instead of sitedata.is_in_maintenance
export default {
	assets: {
		name: 'Asset Manager',
		fields: [],
		canCreateFields: true,
		canDeleteFields: true,
		fieldTemplateOptions: {
			'New File': [
				{
					name: '${name}',
					defaultValue: null,
					type: 'fileselect',
					acceptedFileType: '.png, .jpg, .jpeg',
					reference: 'assets/${name}'
				}
			]
		}
	},
	config: {
		name: 'Configuration',
		canCreateFields: false,
		canDeleteFields: false,
		fields: [
			{
				name: 'Dark Theme',
				options: [
					{
						name: 'Is In Maintenance?',
						defaultValue: false,
						type: 'boolean',
						reference: 'config/is_in_maintenance'
					},
					{
						name: 'Dark Theme Background (Format: r, g, b)',
						defaultValue: '38, 38, 38',
						type: 'text',
						validate: (input) => {
							return (input.exec('^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$').length === 3)
						},
						reference: 'config/dark_theme_bg'
					},
					{
						name: 'Dark Theme Foreground (Format: r, g, b)',
						defaultValue: '255, 255, 255',
						type: 'text',
						validate: (input) => {
							return (input.exec('^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$').length === 3)
						},
						reference: 'config/dark_theme_fg'
					},
					{
						name: 'Dark Theme Highlight (Format: r, g, b)',
						defaultValue: '1, 191, 113',
						type: 'text',
						validate: (input) => {
							return (input.exec('^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$').length === 3)
						},
						reference: 'config/dark_theme_hl'
					}
				]
			},
			{
				name: 'Light Theme',
				options: [
					{
						name: 'Light Theme Background (Format: r, g, b)',
						defaultValue: '255, 255, 255',
						type: 'text',
						validate: (input) => {
							return (input.exec('^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$').length === 3)
						},
						reference: 'config/light_theme_bg'
					},
					{
						name: 'Light Theme Foreground (Format: r, g, b)',
						defaultValue: '114, 111, 111',
						type: 'text',
						validate: (input) => {
							return (input.exec('^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$').length === 3)
						},
						reference: 'config/light_theme_fg'
					},
					{
						name: 'Light Theme Highlight (Format: r, g, b)',
						defaultValue: '191, 124, 1',
						type: 'text',
						validate: (input) => {
							return (input.exec('^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$').length === 3)
						},
						reference: 'config/light_theme_hl'
					}
				]
			},
			{
				name: 'Other',
				options: [
					{
						name: 'Pullout Title',
						defaultValue: 'Pullout Title',
						type: 'text',
						reference: 'config/pullout_title'
					},
					{
						name: 'Font',
						defaultValue: 'Encode Sans Expanded',
						type: 'text',
						reference: 'config/font'
					}
				]
			}
		]
	},
	pullout_entries: {
		name: 'Pullout Entries',
		fields: [],
		canCreateFields: true,
		canDeleteFields: true,
		fieldTemplateOptions: {
			//TODO: finish inputting pullout template data
			'New Pullout Entry': [
				{
					name: 'Title',
					defaultValue: null,
					type: 'text',
					reference: 'pullout_entries/${index}/title'
				},
				{
					name: 'Preview Description',
					defaultValue: null,
					type: 'dropdown',
					options: ['option 1', 'option 2'],
					reference: 'pullout_entries/${index}/preview_description'
				},
				{
					name: 'Image',
					defaultValue: null,
					type: 'fileselect',
					acceptedFileType: '.png, .jpg, .jpeg',
					reference: 'pullout_entries/${index}/image'
				}
			]
		}
	},
	sections: {
		name: 'Site Sections',
		fields: [],
		canCreateFields: true,
		canDeleteFields: true,
		fieldTemplateOptions: {
			'New Home Section': [
				{
					name: 'Container ID',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/container_id'
				},
				{
					name: 'Asset',
					defaultValue: null,
					type: 'dropdown',
					options: [],
					fillDropdownWithAssets: true,
					reference: 'sections/${index}/asset'
				},
				{
					name: 'Asset Type',
					defaultValue: null,
					type: 'dropdown',
					//TODO: create dynamic styling on homepage
					// for video or image
					options: ['video', 'image'],
					reference: 'sections/${index}/asset_type'
				},
				{
					name: 'Main Content',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/main_content'
				},
				{
					name: 'Description',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/description',
				},
				{
					name: 'Button Visible?',
					defaultValue: true,
					type: 'boolean',
					reference: 'sections/${index}/button_visible'
				},
				{
					name: 'Button Text',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/button_text'
				},
				{
					name: 'Button Navbar Link',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/button_navbar_link'
				}
			],
			'New Info Section': [
				{
					name: 'Uses Dark Theme',
					defaultValue: true,
					type: 'boolean',
					reference: 'sections/${index}/uses_dark_theme'
				},
				{
					name: 'Container ID',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/container_id'
				},
				{
					name: 'Display Image First',
					defaultValue: false,
					type: 'boolean',
					reference: 'sections/${index}/display_image_first'
				},
				{
					name: 'Top Line',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/top_line'
				},
				{
					name: 'Headline',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/headline'
				},
				{
					name: 'Subtitle',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/subtitle'
				},
				{
					name: 'Button Visible?',
					defaultValue: true,
					type: 'boolean',
					reference: 'sections/${index}/button_visible'
				},
				{
					name: 'Button Text',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/button_text'
				},
				{
					name: 'Button Navbar Link',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/button_navbar_link'
				},
				{
					name: 'Image',
					defaultValue: null,
					type: 'dropdown',
					options: [],
					fillDropdownWithAssets: true,
					reference: 'sections/${index}/image'
				}
			],
			//TODO: card section has normal props and id,
			// cards take id and link to section
			'New Card Section': [
				{
					name: 'Uses Dark Theme',
					defaultValue: true,
					type: 'boolean',
					reference: 'sections/${index}/uses_dark_theme'
				},
				{
					name: 'Container ID',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/container_id'
				},
				{
					name: 'Headline',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/headline'
				},
				{
					name: 'Parent Link ID',
					defaultValue: null,
					type: 'text',
					reference: 'sections/${index}/parent_link_id'

				}
			],
			'New Card': [
				{
					name: 'Image',
					defaultValue: null,
					type: 'dropdown',
					options: [],
					fillDropdownWithAssets: true,
					reference: 'cards/${index}/image'
				},
				{
					name: 'Title',
					defaultValue: null,
					type: 'text',
					reference: 'cards/${index}/title'
				},
				{
					name: 'Description',
					defaultValue: null,
					type: 'text',
					reference: 'cards/${index}/title'
				}
			]
		}
	},
	navbar: {
		name: 'Navbar',
		fields: [
			{
				name: 'Navbar Options',
				options: [
					{
						name: 'Icon Color',
						defaultValue: '255, 255, 255',
						type: 'text',
						validate: (input) => {
							return (input.exec('^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$').length === 3)
						},
						reference: 'navbar/icon_color'
					},
					{
						name: 'Logo Navbar Link',
						defaultValue: null,
						type: 'text',
						reference: 'navbar/logo_navbar_link'
					},
					{
						name: 'Logo Text',
						defaultValue: null,
						type: 'text',
						reference: 'navbar/logo_text'
					},
					{
						name: 'Show Sign-In Button?',
						defaultValue: true,
						type: 'boolean',
						reference: 'navbar/show_sign_in_button'
					},
					{
						name: 'Sign-In Button Text',
						defaultValue: true,
						type: 'text',
						reference: 'navbar/sign_in_button_text'
					}
				]
			}
		],
		canCreateFields: true,
		canDeleteFields: true,
		fieldTemplateOptions: {
			'New Navbar Link': [
				{
					name: 'Text',
					defaultValue: null,
					type: 'text',
					reference: 'navbar/links/${index}/text'
				},
				{
					name: 'Internal Link?',
					defaultValue: true,
					type: 'boolean',
					reference: 'navbar/links/${index}/internal_link'
				},
				{
					name: 'Link Route',
					defaultValue: null,
					type: 'text',
					reference: 'navbar/links/${index}/link_route'
				}
			]
		}
	},
	footer: {},
	social_media: {}

}