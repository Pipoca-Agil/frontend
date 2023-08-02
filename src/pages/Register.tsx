import React, {useContext} from 'react';
import RegisterComponent from '../components/Register/Register';
import {RegisterWrapper} from '../styles/Register';
import PhotosContainer from '../components/Register/Photos';
import RegisterModal from '../components/modal/Register';
import {RegisterModalContext} from '../context/RegisterContext';
const Register: React.FC = () => {
	const {visible} = useContext(RegisterModalContext);
	return (
		<RegisterWrapper>
			<PhotosContainer/>
			<RegisterComponent/>
			{visible && <RegisterModal/>}
		</RegisterWrapper>
	);
};

export default Register;
