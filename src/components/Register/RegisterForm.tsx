import React, {useEffect} from 'react';
import {useState, useContext} from 'react';
import {RegisterContext} from '../../context/RegisterContext';
import {type RegisterData} from '../../interfaces/formInterfaces';
const RegisterForm: React.FC = () => {
	const {setName, setLastName, setEmail, setPassword, setCheckPassword} = useContext(RegisterContext);

	const [formRegister, setFormRegister] = useState<RegisterData>({
		name: '',
		lastName: '',
		email: '',
		password: '',
		checkPassword: '',
	},
	);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormRegister(prevFormRegister => ({
			...prevFormRegister,
			[name]: value,
		}));
	};

	const handleClick = (): void => {
		/*eslint-disable */
		setName(formRegister.name);
		setLastName(formRegister.lastName);
		setEmail(formRegister.email);
		setPassword(formRegister.password);
		setCheckPassword(formRegister.checkPassword);
		/*eslint-disable*/
	};
	return (
		<form>
			<div>
				<label htmlFor='name-field'>Nome*</label>
				<input
					type='text'
					id='name-field'
					name= 'name'
					value={formRegister.name}
					onChange={handleChange}/>
				<label htmlFor='lastName-field'>Sobrenome*</label>
				<input
					type='text'
					id='lastName-field'
					name= 'lastName'
					value={formRegister.lastName}
					onChange={handleChange}/>
			</div>
			<label htmlFor='email-field'>E-mail*</label>
			<input
				type='text'
				id='email-field'
				name= 'email'
				value={formRegister.email}
				onChange={handleChange}/>
			<label htmlFor='password-field'>Senha*</label>
			<input
				type='password'
				id='password-field'
				name='password'
				value={formRegister.password}
				onChange={handleChange}/>
			<label htmlFor='confirmPassword-field'>Confirme sua Senha*</label>
			<input
				type='password'
				id='confirmPassword-field'
				name='checkPassword'
				value={formRegister.checkPassword}
				onChange={handleChange}/>
			<div>
				<input type='checkbox' id='terms'/>
				<label htmlFor='terms'>
				Li e concordo com os Termos de uso e Política de Privacidade
				</label>
			</div>
			<button
				type='button'
				onClick={handleClick}
			>
					Criar
			</button>
		</form>
	);
};

export default RegisterForm;
