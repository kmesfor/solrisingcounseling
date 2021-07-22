import React from 'react'
import config from '../config.json'


const ImageAsset = ({name}) => {
	return (
		<img src={config.API.BASE + config.API.ASSETS + '/' + name} alt={'Image of ' + name}/>
	)
}

export default ImageAsset
