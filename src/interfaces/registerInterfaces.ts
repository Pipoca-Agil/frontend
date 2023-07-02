export type RegisterData = {
	name: string;
	lastName: string;
	email: string;
	password: string;
	checkPassword: string;
};
export type RegisterContextValue = {
	registerData: RegisterData;
	setRegisterData: React.Dispatch<React.SetStateAction<RegisterData>>;
};

export type RegisterProviderProps = {
	children: React.ReactNode;
};

export type PasswordRequirements = {
	arePasswordsEqual: [boolean, string];
	passLen: [boolean, string];
	containsUpperCase: [boolean, string];
	containsLowerCase: [boolean, string];
	containsNumber: [boolean, string];
	containsSpecialCharacters: [boolean, string];
};
