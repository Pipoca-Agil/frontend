import React, {useContext} from 'react';
import {RegisterModalContext} from '../../context/RegisterContext';
import {modalInfo} from '../../functions/registerFunctions';
import successIcon from '../../assets/icons/modal/downloadiconssucesso 1.png';
import failIcon from '../../assets/icons/modal/errox-removebg-preview 1.png';
import {ModalSection, ModalWrapper, ModalIcon, ModalButton} from '../../styles/Modal';
const RegisterModal: React.FC = () => {
	const {newRegister, setVisible} = useContext(RegisterModalContext);

	const renderInfo = modalInfo(successIcon, failIcon, newRegister);
	return (
		<ModalWrapper>
			<ModalSection
				style={{backgroundColor: renderInfo.backgroundColor}}
			>
				<ModalIcon src={renderInfo.icon} alt='icon'/>
				<h1>{renderInfo.title}</h1>
				<p>{renderInfo.message}</p>
				<ModalButton
					type='button'
					onClick={() => {
						setVisible(false);
					}}
					style={{backgroundColor: renderInfo.buttonBackgroundColor}}
				>
        OK
				</ModalButton>
			</ModalSection>
		</ModalWrapper>
	);
};

export default RegisterModal;
