import {type PasswordRequirements, type RegisterData} from '../interfaces/registerInterfaces';

export const passHasUppercaseLetter = (pass: string): boolean => /[A-Z]/.test(pass);
export const passHasLowercaseLetter = (str: string): boolean => /[a-z]/.test(str);
export const passHasNumber = (str: string): boolean => /[0-9]/.test(str);
export const passHasSpecialCharacters = (str: string): boolean => /[#!\-_&]/.test(str);

export const passwordsMatch = (pass: string, confirmPass: string): boolean => pass === confirmPass;
export const validateEmail = (mail: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(mail);
};

export const validateName = (name: string) => name.length >= 3;
export const validateLastName = (lastName: string) => lastName.length >= 3;
export const passwordRequirementsCheck = (pass: string, confirmPass: string): true | PasswordRequirements => {
	let isPasswordValid: true | PasswordRequirements;
	const arePasswordsEqual = passwordsMatch(pass, confirmPass);
	const passLen = pass.length >= 8;
	const containsUpperCase = passHasUppercaseLetter(pass);
	const containsLowerCase = passHasLowercaseLetter(pass);
	const containsNumber = passHasNumber(pass);
	const containsSpecialCharacters = passHasSpecialCharacters(pass);
	const checkAllPassRequirements = (
		arePasswordsEqual
    && passLen
    && containsUpperCase
    && containsLowerCase
    && containsNumber
    && containsSpecialCharacters
	);

	if (checkAllPassRequirements) {
		isPasswordValid = true;
	} else {
		isPasswordValid = {
			arePasswordsEqual: [arePasswordsEqual, 'As senhas devem ser iguais'],
			passLen: [passLen, '8 caracteres'],
			containsUpperCase: [containsUpperCase, 'Letra maiúscula'],
			containsLowerCase: [containsLowerCase, 'Letra minúscula'],
			containsNumber: [containsNumber, 'Número'],
			containsSpecialCharacters: [containsSpecialCharacters, 'Caractere especial ( ex: #!-_&)'],
		};
	}

	return isPasswordValid;
};

export const funcRequirementsCheck = (requirements: Array<Array<string | boolean>>): string[][] => (
	requirements.map(req => req.includes(true)
		? req.toString().replace('true', 'V').split(',')
		: req.toString().replace('false', 'X').split(','))
);

export const checkPass = (values: RegisterData) => {
	const verifyPass: true | PasswordRequirements = passwordRequirementsCheck(values.password, values.checkPassword);
	const lenPassword = values.password.length === 0 || values.checkPassword.length === 0;
	if (typeof verifyPass === 'boolean' || lenPassword) {
		return true;
	}

	const requirementsValues: Array<Array<string | boolean>> = Object.values(verifyPass);
	const arrRequirements: string[][] = funcRequirementsCheck(requirementsValues);

	return arrRequirements;
};

