import React from 'react';
import {PhotosContainer, LoginImg} from '../../styles/Login';
import first from '../../assets/loginPhotos/close-up-pessoas-falando-no-radio 1.png';
import second from '../../assets/loginPhotos/ibson2-removebg-preview 1.png';
import third from '../../assets/loginPhotos/ibson-removebg-preview 1.png';
const LoginPhotos: React.FC = () => (
	<PhotosContainer>
		<LoginImg
			src={first}
			className='firstPhoto'
		/>
		<LoginImg
			src={second}
			className='secondPhoto'
		/>
		<LoginImg
			src={third}
			className='thirdPhoto'
		/>
	</PhotosContainer>
);

export default LoginPhotos;
