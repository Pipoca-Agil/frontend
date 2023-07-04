import React, {useContext} from 'react';
import {RegisterContext} from '../../context/RegisterContext';
import RegisterForm from './RegisterForm';
import {type RegisterContextValue} from '../../interfaces/registerInterfaces';
import {RegisterSection, FormHeader} from '../../styles/Register';
import RegisterModal from '../modal/Register';
const RegisterComponent: React.FC = () => {
	const {registerData} = useContext<RegisterContextValue>(RegisterContext);

	return (
		<RegisterSection>
			<FormHeader>
				<h2>
        Criar sua Conta
				</h2>
				<p>Tudo o que você precisa saber sobre o mundo ágil</p>
			</FormHeader>
			<RegisterForm/>
			<RegisterModal/>
		</RegisterSection>

	);
};

export default RegisterComponent;
