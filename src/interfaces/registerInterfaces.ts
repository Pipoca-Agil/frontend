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
