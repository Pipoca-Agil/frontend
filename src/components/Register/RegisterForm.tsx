import React, {
	useEffect,
	useState,
	useContext,
} from 'react';

import {RegisterContext} from '../../context/RegisterContext';
import {type RegisterData} from '../../interfaces/registerInterfaces';
import {inicialRegisterData} from '../../assets/utils';
import eye from '../../assets/icons/eye.svg';
import square from '../../assets/icons/square.svg';
import box from '../../assets/icons/box.svg';
import eyeClosed from '../../assets/icons/eye-closed.svg';
import {registerToken} from '../../localStorage/index';
import {
	checkPass,
	checkForm,
} from '../../functions/registerFunctions';
import {postRegister} from '../../api/Register';
import {
	FormWrapper,
	NameLastName,
	PasswordField,
	EyeIcon,
	InputField,
	PasswordInstructions,
	RequirementsList,
	PasswordFailed,
	CheckboxTerms,
	TermsColor,
	CheckBox,
	CheckedIcon,
	SubmitBtn,
} from '../../styles/RegisterForm';

const RegisterForm: React.FC = () => {
	const [isChecked, setIsChecked] = useState(false);
	const {setRegisterData} = useContext(RegisterContext);
	const [formRegister, setFormRegister] = useState<RegisterData>(inicialRegisterData);
	const [submitBtn, setSubmitBtn] = useState<boolean>(true);
	const [typePassword, setTypePassword] = useState(true);
	const [typeCheckPassword, setTypeCheckPassword] = useState(true);
	const [modal, setModal] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormRegister(prevFormRegister => ({
			...prevFormRegister,
			[name]: value.trim(),
		}));
	};

	useEffect(() => {
		const setEnableBtn = checkForm(formRegister, isChecked);
		if (setEnableBtn) {
			setSubmitBtn(false);
		}

		setSubmitBtn(true);
	}, [formRegister]);
	const handleCheckboxToggle = () => {
		setIsChecked(!isChecked);
	};

	const toggleTypePassword = () => {
		setTypePassword(!typePassword);
	};

	const toggleTypeCheckPassword = () => {
		setTypeCheckPassword(!typeCheckPassword);
	};

	const verifyCheckPass = checkPass(formRegister);

	const handleClick = async () => {
		setRegisterData(formRegister);
		const requestBody = {
			name: formRegister.name,
			surname: formRegister.lastName,
			email: formRegister.email,
			password: formRegister.password,
		};
		const postData = await postRegister(requestBody);
		if (typeof postData !== 'undefined' && 'token' in postData) {
			console.log('Success! Token:', postData.token);
			registerToken(postData.token);
			setModal(true);
		} else if (typeof postData !== 'undefined' && 'message' in postData) {
			console.log('Error:', postData.message);
			setModal(true);
		}
	};

	const renderRequirements = (functionReturn: true | string[][]): JSX.Element | undefined => {
		if (functionReturn instanceof Array) {
			return (
				<PasswordFailed>
					<h4>A senha deve conter,  no mínimo:</h4>
					<ul>
						{functionReturn.map(item =>
							<RequirementsList key={item[1]} className={item[0].includes('V') ? 'requirement-passed' : 'requirement-failed'}>
								{`${item[0]} ${item[1]}`}
							</RequirementsList>)
						}
					</ul>
				</PasswordFailed>
			);
		}
	};

	return (
		<FormWrapper>
			<NameLastName>
				<InputField
					type='text'
					name='name'
					placeholder='Nome*'
					value={formRegister.name}
					onChange={handleChange} />
				<InputField
					type='text'
					name='lastName'
					placeholder='Sobrenome*'
					value={formRegister.lastName}
					onChange={handleChange} />
			</NameLastName>
			<InputField
				type='text'
				className='regularInputSize'
				name='email'
				placeholder='E-mail*'
				value={formRegister.email}
				onChange={handleChange} />
			<PasswordField>
				<InputField
					type={typePassword ? 'password' : 'text'}
					name='password'
					className='regularInputSize'
					placeholder='Senha*'
					value={formRegister.password}
					style={verifyCheckPass instanceof Array ? {borderColor: '#C00000', color: '#C00000'} : {}}
					onChange={handleChange} />
				<EyeIcon src={typePassword ? eye : eyeClosed} alt='makes password visible/invisible' onClick={toggleTypePassword} />
			</PasswordField>
			<div>
				<PasswordField>
					<InputField
						type={typeCheckPassword ? 'password' : 'text'}
						name='checkPassword'
						className='regularInputSize'
						placeholder='Confirme sua Senha*'
						value={formRegister.checkPassword}
						style={verifyCheckPass instanceof Array ? {borderColor: '#C00000', color: '#C00000'} : {}}
						onChange={handleChange} />
					<EyeIcon src={typeCheckPassword ? eye : eyeClosed} alt='makes password visible/invisible' onClick={toggleTypeCheckPassword} />
				</PasswordField>
				{verifyCheckPass === true
					&& <PasswordInstructions>
						Sua senha deve conter entre 8 caracteres, uma letra maiúscula, uma minúscula e um número.
					</PasswordInstructions>}
				{verifyCheckPass instanceof Array && renderRequirements(verifyCheckPass)}
			</div>

			<CheckboxTerms htmlFor='terms'>
				<CheckBox
					type='checkbox'
					id='terms'
					checked={isChecked}
					onClick={handleCheckboxToggle} />
				<CheckedIcon src={isChecked ? box : square} alt='checkbox' />
					Li e concordo com os <TermsColor>Termos de uso</TermsColor> e <TermsColor>Política de Privacidade</TermsColor>
			</CheckboxTerms>
			<SubmitBtn
				type='button'
				disabled={!checkForm(formRegister, isChecked) && submitBtn}
				onClick={handleClick}
			>
				Criar
			</SubmitBtn>
		</FormWrapper>
	);
};

export default RegisterForm;
