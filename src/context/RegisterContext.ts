/* eslint-disable @typescript-eslint/naming-convention */
import {createContext} from 'react';
import type {RegisterContextValue, ModalContext} from '../interfaces/registerInterfaces';
import {inicialRegisterData, modalInicial} from '../assets/utils';

export const RegisterContext = createContext<RegisterContextValue>({
	registerData: inicialRegisterData,
	setRegisterData: () => inicialRegisterData,
});
export const RegisterModalContext = createContext<ModalContext>({
	visible: false,
	setVisible: () => modalInicial,
});
