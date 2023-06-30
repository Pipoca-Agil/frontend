import {createContext} from 'react';
import type {RegisterContextValue} from '../interfaces/registerInterfaces';
import {inicialRegisterData} from '../assets/consts';
// eslint-disable-next-line
export const RegisterContext = createContext<RegisterContextValue>({
	registerData: inicialRegisterData,
	setRegisterData: () => inicialRegisterData,
});
