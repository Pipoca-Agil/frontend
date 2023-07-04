import React, {useMemo, useState} from 'react';
import {RegisterModalContext} from './RegisterContext';
import type{RegisterProviderProps} from '../interfaces/registerInterfaces';
// eslint-disable-next-line
const ModalProvider = ({children}:RegisterProviderProps) => {
	const [visible, setVisible] = useState<boolean>(false);
	const context = useMemo(() => ({
		visible,
		setVisible,
	}), [visible]);
	return (
		<RegisterModalContext.Provider value={context}>
			{children}
		</RegisterModalContext.Provider>
	);
};

export default ModalProvider;
