import React from 'react';
import {useState, useContext} from 'react';
import {RegisterContext} from '../../context/RegisterContext';
const RegisterForm: React.FC = () => {
	const {setName, setLastName, setEmail, setPassword, setCheckPassword} = useContext(RegisterContext);
	const [inputName, setInputName] = useState('');
	const [inputLastName, setInputLastName] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [inputCheckPassword, setInputCheckPassword] = useState('');

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setInputName(value);
	};

	const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setInputLastName(value);
	};

	const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setInputEmail(value);
	};

	const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setInputPassword(value);
	};

	const handleChangeCheckPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		setInputCheckPassword(value);
	};

	const handleClick = (): void => {
		/*eslint-disable */
		setName(inputName);
		setLastName(inputLastName);
		setEmail(inputEmail);
		setPassword(inputPassword);
		setCheckPassword(inputCheckPassword);
		/*eslint-disable*/
	};

	return (
		<form>
			<div>
				<label htmlFor='name-field'>Nome*</label>
				<input
					type='text'
					id='name-field'
					value={inputName}
					onChange={handleChangeName}/>
				<label htmlFor='lastName-field'>Sobrenome*</label>
				<input
					type='text'
					id='lastName-field'
					value={inputLastName}
					onChange={handleChangeLastName}/>
			</div>
			<label htmlFor='email-field'>E-mail*</label>
			<input
				type='text'
				id='email-field'
				value={inputEmail}
				onChange={handleChangeEmail}/>
			<label htmlFor='password-field'>Senha*</label>
			<input
				type='password'
				id='password-field'
				value={inputPassword}
				onChange={handleChangePassword}/>
			<label htmlFor='confirmPassword-field'>Confirme sua Senha*</label>
			<input
				type='password'
				id='confirmPassword-field'
				value={inputCheckPassword}
				onChange={handleChangeCheckPassword}/>
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
