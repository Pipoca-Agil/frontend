import React, {useContext} from 'react';
import RegisterComponent from '../components/Register/Register';
import Header from '../components/Header/Header';
import {RegisterWrapper} from '../styles/Register';
import PhotosContainer from '../components/photos/Photos';
import RegisterModal from '../components/modal/Register';
import {RegisterModalContext} from '../context/RegisterContext';
const Register: React.FC = () => {
	const {visible} = useContext(RegisterModalContext);
	return (
		<RegisterWrapper>
			<Header/>
			<PhotosContainer/>
			<RegisterComponent/>
			{visible && <RegisterModal/>}
		</RegisterWrapper>
	);
};

export default Register;
