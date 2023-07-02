import React from 'react';
import {useNavigate} from 'react-router-dom';
import {HeaderWrapper, ActionWrapper, HeaderButton} from './HeaderStyle';
import Logo from '../../assets/icons/Logo.png';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const buttonValue = 'Login';
	return (
		<HeaderWrapper>
			<ActionWrapper>
				<img alt='logo-icon' src={Logo}/>
				<HeaderButton onClick={() => {
					navigate('/login');
				}}>
					{`${buttonValue}`}
				</HeaderButton>

			</ActionWrapper>
		</HeaderWrapper>
	);
};

export default Header;
