import React, {useMemo, useState, ReactNode} from 'react';
import {RegisterContext} from './RegisterContext';
import type{FormContextValue, RegisterProviderProps} from './contextInterface';

// eslint-disable-next-line
const RegisterProvider = ({children}:RegisterProviderProps) => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState('');

	const context = useMemo(() => ({
		name,
		lastName,
		email,
		password,
		checkPassword,
		setName,
		setLastName,
		setEmail,
		setPassword,
		setCheckPassword,
	}), [name,
		lastName,
		email,
		password,
		checkPassword]);
	return (
		<RegisterContext.Provider value={context}>
			{children}
		</RegisterContext.Provider>
	);
};

export default RegisterProvider;
