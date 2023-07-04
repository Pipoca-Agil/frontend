import React from 'react';
import {registeredUser} from '../../localStorage/index';
import {type RegisterModalType} from '../../interfaces/registerInterfaces';
import successIcon from '../../assets/icons/modal/downloadiconssucesso 1.png';
import failIcon from '../../assets/icons/modal/errox-removebg-preview 1.png';

const RegisterModal: React.FC = () => {
	const userCreated = registeredUser();
	const modalInfo = (success: string, fail: string): RegisterModalType => {
		if (userCreated) {
			return ({
				icon: success,
				title: 'Sucesso!',
				message: 'Seu cadastro foi efetuado com sucesso!',
			});
		}

		return ({
			icon: fail,
			title: 'Erro ao criar cadastro!',
			message: `Verifique se as informações descritas
      no momento do cadastro estão corretas e tente novamente.`,
		});
	};

	const renderInfo = modalInfo(successIcon, failIcon);
	return (
		<section>
			<div>
				<img src={renderInfo.icon} alt='icon'/>
				<h1>{renderInfo.title}</h1>
				<p>{renderInfo.message}</p>
			</div>
			<button
				type='button'
			>
        OK
			</button>
		</section>
	);
};

export default RegisterModal;
