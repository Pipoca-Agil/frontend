export const navigateTo = (url: string): string => {
	const currentPath = url.endsWith('/home') || url.endsWith('.app');
	switch (currentPath) {
		case true:
			return 'Login';
		default:
			return 'Home';
	}
};
