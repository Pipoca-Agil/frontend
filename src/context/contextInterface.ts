export type FormContextValue = {
	name: string;
	lastName: string;
	email: string;
	password: string;
	checkPassword: string;
	setName: (name: string) => void;
	setLastName: (lastName: string) => void;
	setEmail: (email: string) => void;
	setPassword: (password: string) => void;
	setCheckPassword: (checkPassword: string) => void;
};

export type RegisterProviderProps = {
	children: React.ReactNode;
};
