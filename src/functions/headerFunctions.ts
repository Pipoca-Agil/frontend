export const navigateTo = (url: string): string => {
	console.log('url => ', url);
	const currentPath = url.endsWith('/Home') || url.endsWith('app') || url.endsWith('/');
	console.log('currentPath => ', currentPath);
	switch (currentPath) {
		case true:
			return 'Login';
		default:
			return 'Home';
	}
};
