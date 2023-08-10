import React from 'react';
import * as Styled from '../../styles/Aside/balloons';
import leftBalloon from '../../assets/aside/leftBalloons.svg';
import rightBalloon from '../../assets/aside/rightBalloons.svg';
const Aside: React.FC = () => (
	<section>
		<Styled.BalloonsWrapper>
			<Styled.Balloons>
				<img src={leftBalloon} alt='balloons'/>
			</Styled.Balloons>
			<Styled.Balloons className='right'>
				<img src={rightBalloon} alt='balloons'/>
			</Styled.Balloons>
		</Styled.BalloonsWrapper>

	</section>
);
export default Aside;
