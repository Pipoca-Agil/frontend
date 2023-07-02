import React, {useContext} from 'react';
import {RegisterContext} from '../../context/RegisterContext';
import RegisterForm from './RegisterForm';
import {type RegisterContextValue} from '../../interfaces/registerInterfaces';
import appleIcon from '../../assets/icons/apple (1) 1.png';
import googleIcon from '../../assets/icons/google 1.png';
const RegisterComponent: React.FC = () => {
	const {registerData} = useContext<RegisterContextValue>(RegisterContext);

	return (
		<div>
			<header>
				<h2>
        Criar sua Conta
				</h2>
				<p>Tudo o que você precisa saber sobre o mundo ágil</p>
			</header>
			<RegisterForm/>
			<section>
				<div/>
				<p>ou</p>
				<div/>
				<div>
					<button>
						<img alt='appleIcon' src={appleIcon}/>
					Criar sua conta com Apple
					</button>
					<button>
						<img alt='googleIcon' src={googleIcon}/>
					Criar sua conta com Google
					</button>
				</div>
			</section>
		</div>

	);
};

export default RegisterComponent;
