import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {ActionWrapper, HeaderButton, LoginPageNavigate} from '../../styles/Header';
import {HeaderWrapper} from '../../styles/Register';
import Logo from '../../assets/icons/Logo Pipoca Ágil.png';
import {navigateTo} from '../../functions/headerFunctions';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const currentUrl = window.location.href;
	const isLoginPage = currentUrl.endsWith('/Login');
	console.log(isLoginPage);

	return (
		<HeaderWrapper>
			<ActionWrapper>
				<img
					alt='logo-icon'
					src={Logo}
					style={{width: '100px', height: '5rem'}}
				/>
				{isLoginPage
					? <LoginPageNavigate>
						<HeaderButton
							onClick={() => {
								navigate(`/${navigateTo(currentUrl)}`);
							}}
							className='homeLoginPage'>
						Voltar
						</HeaderButton>
						<HeaderButton
							onClick={() => {
								navigate('/Register');
							}}
						>
					Cadastro
						</HeaderButton>
					</LoginPageNavigate>
					:	<HeaderButton onClick={() => {
						navigate(`/${navigateTo(currentUrl)}`);
					}}>
						{`${navigateTo(currentUrl)}`}
					</HeaderButton>
				}

			</ActionWrapper>
		</HeaderWrapper>
	);
};

export default Header;
