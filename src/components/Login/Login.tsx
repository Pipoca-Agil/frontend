import React from 'react';
import {useNavigate} from 'react-router-dom';
import LoginForm from './LoginForm';
import {TermsColor} from '../../styles/RegisterForm';
import {LoginFormContainer, BtnNewAcc} from '../../styles/Login';
const LoginContent: React.FC = () => {
	const navigate = useNavigate();
	return (
		<LoginFormContainer>
			<header style={{textAlign: 'center'}}>
				<h1>Faça Login</h1>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<p>Novo no Pipoca Ágil Podcast?</p>
					<BtnNewAcc type='button' onClick={() => {
						navigate('/Register');
					}}>
					Crie aqui sua conta!
					</BtnNewAcc>
				</div>
			</header>
			<LoginForm/>
		</LoginFormContainer>

	);
};

export default LoginContent;
