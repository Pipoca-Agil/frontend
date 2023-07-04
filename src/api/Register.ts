import {apiUrl} from '../assets/utils';
import {type RequestApiBody, type ResponseApiOk, type ResponseApiError} from '../interfaces/registerInterfaces';

export const postRegister = async (formData: RequestApiBody) => {
	try {
		const response: Response = await fetch(`${apiUrl}/user`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});
		const data = await response.json() as ResponseApiOk | ResponseApiError;
		return data;
	} catch (error) {
		console.log('ERROR: ', error);
	}
};

