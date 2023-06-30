import React, {useContext} from 'react';
import RegisterForm from './RegisterForm';
import {type RegisterContextValue} from '../../interfaces/registerInterfaces';
import {RegisterContext} from '../../context/RegisterContext';
const RegisterComponent: React.FC = () => {
	const {registerData} = useContext<RegisterContextValue>(RegisterContext);

	console.log(registerData);
	return (
		<div>
			<header>
				<h2>
        Criar sua Conta
				</h2>
				<p>Tudo o que você precisa saber sobre o mundo ágil</p>
			</header>
			<RegisterForm/>
		</div>

	);
};

export default RegisterComponent;
