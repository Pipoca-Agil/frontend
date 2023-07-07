import React from 'react';
import {useState} from 'react';
import {type LoginInterface} from '../../interfaces/loginInterfaces';
import {inicialLoginState} from '../../assets/utils';
import {
	InputField,
	PasswordField,
	EyeIcon,
	CheckedIcon,
	CheckBox,
	CheckboxTerms,
	TermsColor,
	SubmitBtn,
	FormWrapper,
} from '../../styles/RegisterForm';
import {LoginFormContainer, LoginPass} from '../../styles/Login';
import square from '../../assets/icons/square.svg';
import box from '../../assets/icons/box.svg';
import eye from '../../assets/icons/eye.svg';
import eyeClosed from '../../assets/icons/eye-closed.svg';
const LoginForm: React.FC = () => {
	const [loginData, setLoginData] = useState<LoginInterface>(inicialLoginState);
	const [typePassword, setTypePassword] = useState(true);
	const [isChecked, setIsChecked] = useState(false);
	const [submitBtn, setSubmitBtn] = useState<boolean>(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setLoginData(prevFormRegister => ({
			...prevFormRegister,
			[name]: value.trim(),
		}));
	};

	const handleCheckboxToggle = () => {
		setIsChecked(!isChecked);
	};

	const toggleTypePassword = () => {
		setTypePassword(!typePassword);
	};

	return (
		<FormWrapper>
			<InputField
				type='text'
				placeholder='Email'
				name='email'
				className='loginInput'
				value={loginData.email}
				onChange={handleChange}
			/>
			<PasswordField>
				<InputField
					type={typePassword ? 'password' : 'text'}
					className='loginInput'
					name='password'
					placeholder='Senha'
				/>
				<EyeIcon
					src={typePassword ? eye : eyeClosed}
					alt='makes password visible/invisible'
					className='loginInput'
					onClick={toggleTypePassword}
				/>
			</PasswordField>
			<LoginPass>
				<CheckboxTerms htmlFor='forgotPassCheck'>
					<CheckBox
						type='checkbox'
						id='forgotPassCheck'
						checked={isChecked}
						onClick={handleCheckboxToggle} />
					<CheckedIcon src={isChecked ? box : square} alt='checkbox' />
        Lembrar-me
				</CheckboxTerms>
				<TermsColor>Esqueceu sua senha?</TermsColor>
			</LoginPass>
			<SubmitBtn type='button'>Entrar</SubmitBtn>
		</FormWrapper>
	);
};

export default LoginForm;
