export const navigateTo = (url: string): string => {
	const currentPath = url.replace('http://localhost:3000', '');
	switch (currentPath) {
		case '/':
			return 'Login';
		case '/Home':
			return 'Login';
		default:
			return 'Home';
	}
};
