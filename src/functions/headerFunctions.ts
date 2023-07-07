export const navigateTo = (url: string): string => {
	const currentPath = url.endsWith('/Home') || url.endsWith('app') || url.endsWith('/');
	switch (currentPath) {
		case true:
			return 'Login';
		default:
			return 'Home';
	}
};
