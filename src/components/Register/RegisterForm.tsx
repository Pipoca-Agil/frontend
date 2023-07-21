import React, {
	useEffect,
	useState,
	useContext,
} from 'react';

import {RegisterContext, RegisterModalContext} from '../../context/RegisterContext';
import {type RegisterData} from '../../interfaces/registerInterfaces';
import {inicialRegisterData} from '../../assets/utils';
import eye from '../../assets/icons/eye.svg';
import eyeClosed from '../../assets/icons/eye-closed.svg';
import square from '../../assets/icons/square.svg';
import box from '../../assets/icons/box.svg';
import {registerToken} from '../../localStorage/index';
import {
	checkPass,
	checkForm,
	validateEmail,
	validateName,
	validateLastName,
} from '../../functions/registerFunctions';
import {postRegister} from '../../api/Register';
import {
	FormWrapper,
	PasswordField,
	EyeIcon,
	InputField,
	FieldInstructions,
	RequirementsList,
	PasswordFailed,
	SubmitBtn,
	TermsColor,
	CheckboxTerms,
	CheckBox,
	CheckedIcon,
} from '../../styles/RegisterForm';

// eslint-disable-next-line complexity
const RegisterForm: React.FC = () => {
	const [isChecked, setIsChecked] = useState(false);
	const {setRegisterData} = useContext(RegisterContext);
	const {setVisible, setNewRegister} = useContext(RegisterModalContext);
	const [formRegister, setFormRegister] = useState<RegisterData>(inicialRegisterData);
	const [submitBtn, setSubmitBtn] = useState<boolean>(true);
	const [typePassword, setTypePassword] = useState(true);
	const [typeCheckPassword, setTypeCheckPassword] = useState(true);

	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	const isEdge = /edg/i.test(navigator.userAgent);
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

	const toggleTypePassword = () => {
		setTypePassword(!typePassword);
	};

	const toggleTypeCheckPassword = () => {
		setTypeCheckPassword(!typeCheckPassword);
	};

	const verifyCheckPass = checkPass(formRegister);

	const handleClick = async () => {
		setRegisterData(formRegister);
		setVisible(true);
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
			setNewRegister(true);
		} else if (typeof postData !== 'undefined' && 'message' in postData) {
			console.log('Error:', postData.message);
			setNewRegister(false);
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

	const buttonChecker = !checkForm(formRegister) && submitBtn;
	const nameChecker = formRegister.name.length > 0 ? validateName(formRegister.name) : true;
	const lastNameChecker = formRegister.lastName.length > 0 ? validateLastName(formRegister.lastName) : true;
	const emailChecker = formRegister.email.length > 0 ? validateEmail(formRegister.email) : true;

	return (
		<FormWrapper>

			<InputField
				type='text'
				name='name'
				placeholder='Nome*'
				className='regularInputSize'
				value={formRegister.name}
				style={nameChecker ? {} : {borderColor: '#C00000', color: '#C00000'}}
				onChange={handleChange} />
			{formRegister.name.length > 0 && formRegister.name.length < 3
				? <FieldInstructions>
				Nome deve ser no mínimo 3 letras e não conter caracteres especiais.
				</FieldInstructions>
				: formRegister.name.length > 0 && !nameChecker
				&& <FieldInstructions>
				Nome deve ser no mínimo 3 letras e não conter caracteres especiais.
				</FieldInstructions>
			}
			<InputField
				type='text'
				name='lastName'
				className='regularInputSize'
				style={lastNameChecker ? {} : {borderColor: '#C00000', color: '#C00000'}}
				placeholder='Sobrenome*'
				value={formRegister.lastName}
				onChange={handleChange} />
			{formRegister.lastName.length > 0 && formRegister.lastName.length <= 3
				? <FieldInstructions>
				Sobrenome deve ser no mínimo 3 letras e não conter caracteres especiais.
				</FieldInstructions>
				: formRegister.lastName.length > 0 && !lastNameChecker
				&& <FieldInstructions>
				Sobrenome deve ser no mínimo 3 letras e não conter caracteres especiais.
				</FieldInstructions>
			}
			<InputField
				type='text'
				className='regularInputSize'
				name='email'
				placeholder='E-mail*'
				id='email_field'
				value={formRegister.email}
				style={emailChecker ? {} : {borderColor: '#C00000', color: '#C00000'} }
				onChange={handleChange} />
			{formRegister.email.length > 0 && !emailChecker
				&& <FieldInstructions>
					E-mail deve ser no formato: exemplo@exemplo.com
				</FieldInstructions>
			}
			<PasswordField>
				<InputField
					type={typePassword ? 'password' : 'text'}
					name='password'
					className='regularInputSize'
					placeholder='Senha*'
					value={formRegister.password}
					style={verifyCheckPass instanceof Array ? {borderColor: '#C00000', color: '#C00000'} : {}}
					onChange={handleChange} />
				{isEdge || isSafari ? <></> : <EyeIcon
					src={typePassword ? eye : eyeClosed}
					alt='makes password visible/invisible'
					onClick={toggleTypePassword}
				/>}
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
					{isEdge || isSafari ? <></> : <EyeIcon
						src={typeCheckPassword ? eye : eyeClosed}
						alt='makes password visible/invisible'
						onClick={toggleTypeCheckPassword}
					/>}
				</PasswordField>
				{verifyCheckPass instanceof Array && renderRequirements(verifyCheckPass)}
			</div>
			{/* <CheckboxTerms htmlFor='terms'>
				<CheckBox
					type='checkbox'
					id='terms'
					checked={isChecked}
					onClick={handleCheckboxToggle} />
				<CheckedIcon src={isChecked ? box : square} alt='checkbox' />
					Li e concordo com os <TermsColor>Termos de uso</TermsColor> e <TermsColor>Política de Privacidade</TermsColor>
			</CheckboxTerms> */}
			<SubmitBtn
				type='button'
				disabled={buttonChecker}
				title={buttonChecker ? 'Preencha todos os campos' : 'Criar cadastro'}
				onClick={handleClick}
				style={buttonChecker ? {cursor: 'not-allowed'} : {}}
			>
				Criar
			</SubmitBtn>
		</FormWrapper>
	);
};

export default RegisterForm;
