import React from 'react';
import {Photos} from '../../styles/Register';
import {
	FirstLayer,
	SecondLayer,
	PhotoLayer,
	PhotoImg,
} from '../../styles/Photo';
import firstLayer from '../../assets/vector/Vector.svg';
import secondLayer from '../../assets/vector/Vector2layer.svg';
import photo from '../../assets/vector/ibson-pipoca-agil-removebg-preview 1.png';

function PhotosContainer() {
	return (
		<Photos>
			<div>
				<FirstLayer src={firstLayer} />
				<PhotoLayer>
					<SecondLayer src={secondLayer} />
					<PhotoImg src={photo}/>
				</PhotoLayer>
			</div>
		</Photos>
	);
}

export default PhotosContainer;
