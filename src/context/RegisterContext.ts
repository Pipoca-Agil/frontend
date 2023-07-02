import {createContext} from 'react';
import type {RegisterContextValue} from '../interfaces/registerInterfaces';
import {inicialRegisterData} from '../assets/utils';
// eslint-disable-next-line
export const RegisterContext = createContext<RegisterContextValue>({
	registerData: inicialRegisterData,
	setRegisterData: () => inicialRegisterData,
});
