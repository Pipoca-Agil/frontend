import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {ActionWrapper, HeaderButton} from '../../styles/Header';
import {HeaderWrapper} from '../../styles/Register';
import Logo from '../../assets/icons/Logo.png';
import {navigateTo} from '../../functions/headerFunctions';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const currentUrl = window.location.href;

	return (
		<HeaderWrapper>
			<ActionWrapper>
				<img alt='logo-icon' src={Logo}/>
				<HeaderButton onClick={() => {
					navigate(`/${navigateTo(currentUrl)}`);
				}}>
					{`${navigateTo(currentUrl)}`}
				</HeaderButton>

			</ActionWrapper>
		</HeaderWrapper>
	);
};

export default Header;
