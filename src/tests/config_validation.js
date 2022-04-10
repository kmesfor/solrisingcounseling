/*

See
- https://ajv.js.org/guide/getting-started.html#basic-data-validation
-https://ajv.js.org/json-schema.html#draft-07

*/
const Ajv = require('ajv')
const ajv = new Ajv()

const schema = {
	type: 'object',
	properties: {
		assets: {
			type: 'object', 
			properties: {
				src: {type: 'string'},
				isImage: {type: 'boolean'},
				alt: {type: 'string'}
			},
			required: ['src', 'isImage', 'alt'],
			additionalProperties: false
		},
		config: {
			type: 'object',
			properties: {
				dark_theme_bg: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				dark_theme_fg: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				dark_theme_hl: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				light_theme_bg: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				light_theme_fg: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				light_theme_hl: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				dark_theme_bg_strong: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				light_theme_bg_strong: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				light_theme_footer_bg: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				dark_theme_footer_bg: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				err: {type: 'string', pattern: '^(?:(?:^|,\\s*)([01]?\\d\\d?|2[0-4]\\d|25[0-5])){3}$'},
				is_in_maintenance: {type: 'boolean'},
				pullout_title: {type: 'string'},
				font: {type: 'string'}
			},
			required: ['dark_theme_bg', 'dark_theme_fg', 'dark_theme_hl', 'light_theme_bg', 'light_theme_fg', 'light_theme_hl', 'dark_theme_bg_strong', 'light_theme_bg_strong', 'light_theme_footer_bg', 'dark_theme_footer_bg', 'err', 'is_in_maintenance', 'pullout_title', 'font'],
			additionalProperties: false
		},
		sections: {
			type: 'array',
			
		}
	},
	required: ['assets', 'config'],
	additionalProperties: false
}
const validate = ajv.compile(schema)

const dataPass = {
	assets: {
		src: 'aaa',
		isImage: true,
		alt: 'aaa'
	}
}

const dataFail = {
	assets: {
		isImage: true,
		alt: 'aaa'
	}
}

const dataFail2 = {
	assts: {
		src: 'aaa',
		isImage: true,
		alt: 'aaa'
	}
}

const dataFail3 = {
	assets: {
		src: 'aaa',
		isImage: true,
		alt: 'aaa'
	},
	test: {
		src: 'aaa'
	}
}

console.log(validate(dataPass))
console.log(validate(dataFail))
console.log(validate(dataFail2))
console.log(validate(dataFail3))