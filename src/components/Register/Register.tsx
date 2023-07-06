import React from 'react';
import RegisterForm from './RegisterForm';
import {RegisterSection, FormHeader} from '../../styles/Register';

const RegisterComponent: React.FC = () => (
	<RegisterSection >
		<FormHeader>
			<h2>
        Criar sua Conta
			</h2>
			<p>Tudo o que você precisa saber sobre o mundo ágil</p>
		</FormHeader>
		<RegisterForm/>

	</RegisterSection>
);

export default RegisterComponent;
