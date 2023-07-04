export type RegisterData = {
	name: string;
	lastName: string;
	email: string;
	password: string;
	checkPassword: string;
};

export type RequestApiBody = {
	name: string;
	surname: string;
	email: string;
	password: string;
};

export type ResponseApiOk = {
	token: string;
};
export type ResponseApiError = {
	message: string;
};

export type RegisterContextValue = {
	registerData: RegisterData;
	setRegisterData: React.Dispatch<React.SetStateAction<RegisterData>>;
};

export type RegisterProviderProps = {
	children: React.ReactNode;
};

export type ModalContext = {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PasswordRequirements = {
	arePasswordsEqual: [boolean, string];
	passLen: [boolean, string];
	containsUpperCase: [boolean, string];
	containsLowerCase: [boolean, string];
	containsNumber: [boolean, string];
	containsSpecialCharacters: [boolean, string];
};

export type RegisterModalType = {
	icon: string;
	title: string;
	message: string;
};
