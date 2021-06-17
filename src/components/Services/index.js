import React from 'react'

import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'



import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1}/>
					<ServicesH2>Service 1</ServicesH2>
					<ServicesP>Service 1 description</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2}/>
					<ServicesH2>Service 2</ServicesH2>
					<ServicesP>Service 2 description</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3}/>
					<ServicesH2>Service 3</ServicesH2>
					<ServicesP>Service 3 description</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services
