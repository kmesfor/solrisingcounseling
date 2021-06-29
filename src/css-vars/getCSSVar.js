export default function getCSSVar(name) {
	return require('./CSSVars.json')[name] || require('./defaultValues.json')[name]
}