import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import LoginContent from '../components/Login/Login';
import LoginPhotos from '../components/Login/PhotosLogin';
import {LoginWrapper} from '../styles/Login';
const Login: React.FC = () => {
	const page = 'Login';
	return (
		<LoginWrapper>
			<LoginContent/>
			<LoginPhotos/>
		</LoginWrapper>

	);
};

export default Login;
