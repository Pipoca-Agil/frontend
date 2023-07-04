import React from 'react';
import RegisterComponent from '../components/Register/Register';
import Header from '../components/Header/Header';
import {RegisterWrapper} from '../styles/Register';
import PhotosContainer from '../components/photos/Photos';

const Register: React.FC = () => (
	<RegisterWrapper>
		<Header/>
		<PhotosContainer/>
		<RegisterComponent/>
	</RegisterWrapper>
);

export default Register;
