import React, {useContext} from 'react';
import RegisterForm from './RegisterForm';
import {type RegisterContextValue} from '../../interfaces/registerInterfaces';
import {RegisterSection, FormHeader} from '../../styles/Register';
import {RegisterModalContext} from '../../context/RegisterContext';
import {fadeBackground} from '../../functions/registerFunctions';

const RegisterComponent: React.FC = () => {
	const {visible} = useContext(RegisterModalContext);
	const addFadeClass = fadeBackground(visible);
	return (
		<RegisterSection className={addFadeClass}>
			<FormHeader>
				<h2>
        Criar sua Conta
				</h2>
				<p>Tudo o que você precisa saber sobre o mundo ágil</p>
			</FormHeader>
			<RegisterForm/>

		</RegisterSection>
	);
};

export default RegisterComponent;
