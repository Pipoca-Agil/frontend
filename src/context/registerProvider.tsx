import React, {useMemo, useState} from 'react';
import {RegisterContext} from './RegisterContext';
import type{RegisterData, RegisterProviderProps} from '../interfaces/registerInterfaces';
import {inicialRegisterData} from '../assets/utils';
// eslint-disable-next-line
const RegisterProvider = ({children}:RegisterProviderProps) => {
	const [registerData, setRegisterData] = useState<RegisterData>(inicialRegisterData);
	const context = useMemo(() => ({
		registerData,
		setRegisterData,
	}), [registerData]);
	return (
		<RegisterContext.Provider value={context}>
			{children}
		</RegisterContext.Provider>
	);
};

export default RegisterProvider;
