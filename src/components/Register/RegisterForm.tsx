import React, {
	useEffect,
	useState,
	useContext,
} from 'react';

import {RegisterContext} from '../../context/RegisterContext';
import {type RegisterData} from '../../interfaces/registerInterfaces';
import {inicialRegisterData} from '../../assets/utils';
import eye from '../../assets/icons/eye.svg';

import {
	validateName,
	validateEmail,
	validateLastName,
	checkPass,
} from '../../functions/registerFunctions';

const RegisterForm: React.FC = () => {
	const [isChecked, setIsChecked] = useState(false);
	const {setRegisterData} = useContext(RegisterContext);
	const [formRegister, setFormRegister] = useState<RegisterData>(inicialRegisterData);
	const [submitBtn, setSubmitBtn] = useState<boolean>(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormRegister(prevFormRegister => ({
			...prevFormRegister,
			[name]: value.trim(),
		}));
	};

	useEffect(() => {
		const setEnableBtn = checkForm(formRegister);
		if (setEnableBtn) {
			setSubmitBtn(false);
		}

		setSubmitBtn(true);
	}, [formRegister]);
	const handleCheckboxToggle = () => {
		setIsChecked(!isChecked);
	};

	const verifyCheckPass = checkPass(formRegister);
	const checkForm = (values: RegisterData): boolean => {
		const checkName = validateName(values.name);
		const checkLenPass = values.password.length > 0 && values.checkPassword.length > 0;
		const checkLastName = validateLastName(values.lastName);
		const checkEmail = validateEmail(values.email);
		if ((verifyCheckPass === true && checkLenPass)
			&& checkName && checkLastName && checkEmail && isChecked) {
			return true;
		}

		return false;
	};

	const handleClick = (): void => {
		setRegisterData(formRegister);
	};

	const renderRequirements = (functionReturn: true | string[][]): JSX.Element | undefined => {
		if (functionReturn instanceof Array) {
			return (
				<div>
					<h4>A senha deve conter,  no mínimo:</h4>
					<ul>
						{functionReturn.map(item =>
							<li key={item[1]}>
								{`${item[0]} ${item[1]}`}
							</li>)
						}
					</ul>
				</div>
			);
		}
	};

	console.log(checkForm(formRegister));

	return (
		<form>
			<div>
				<input
					type='text'
					id='name-field'
					name= 'name'
					placeholder='Nome*'
					value={formRegister.name}
					onChange={handleChange}/>
				<input
					type='text'
					id='lastName-field'
					name= 'lastName'
					placeholder='Sobrenome*'
					value={formRegister.lastName}
					onChange={handleChange}/>
			</div>
			<input
				type='text'
				id='email-field'
				name= 'email'
				placeholder='E-mail*'
				value={formRegister.email}
				onChange={handleChange}/>
			<div>
				<input
					type='password'
					id='password-field'
					name='password'
					placeholder='Senha*'
					value={formRegister.password}
					onChange={handleChange}/>
				<img src={eye} alt='make password visible' />
			</div>
			<div>
				<input
					type='password'
					id='confirmPassword-field'
					name='checkPassword'
					placeholder='Confirme sua Senha*'
					value={formRegister.checkPassword}
					onChange={handleChange}/>
				<img src={eye} alt='make password visible' />
				{verifyCheckPass === true
				&& <p>Sua senha deve conter entre 8 caracteres, uma letra maiúscula, uma minúscula e um número.</p>}
				{verifyCheckPass instanceof Array && renderRequirements(verifyCheckPass)}
			</div>
			<div>
				<input
					type='checkbox'
					id='terms'
					checked={isChecked}
					onClick={handleCheckboxToggle}/>
				<label htmlFor='terms'>
				Li e concordo com os Termos de uso e Política de Privacidade
				</label>
			</div>
			<button
				type='button'
				disabled={!checkForm(formRegister) && submitBtn}
				onClick={handleClick}
			>
					Criar
			</button>
		</form>
	);
};

export default RegisterForm;
