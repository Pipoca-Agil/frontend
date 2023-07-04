type UserData = {
	token: string;
};

export const registeredUser = () => {
	const storedToken = localStorage.getItem('token');
	if (storedToken) {
		return true;
	}

	return false;
};

export const registerToken = (token: string) => {
	const storedToken = localStorage.getItem('token');
	if (!storedToken) {
		const user: UserData = {token};
		localStorage.setItem('token', JSON.stringify(user));
		return user;
	}

	return 'usuário já cadastrado!';
};
