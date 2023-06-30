import {createContext} from 'react';
import type{FormContextValue} from './contextInterface';

// eslint-disable-next-line
export const RegisterContext = createContext<FormContextValue>({
	name: '',
	lastName: '',
	email: '',
	password: '',
	checkPassword: '',
	setName: () => '',
	setLastName: () => '',
	setEmail: () => '',
	setPassword: () => '',
	setCheckPassword: () => '',
});
