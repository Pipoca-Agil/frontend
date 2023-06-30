import React, {useContext} from 'react';
import RegisterForm from './RegisterForm';
import {RegisterContext} from '../../context/RegisterContext';
const RegisterComponent: React.FC = () => {
	const a = 'não quero deixar de ter os {} então precisa ter algum código além do return';
	const {name, lastName, email, password, checkPassword} = useContext(RegisterContext);

	console.log(name, lastName, email, password, checkPassword);
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
