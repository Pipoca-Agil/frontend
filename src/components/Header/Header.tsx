import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../../styles/Header';
import Logo from '../../assets/logo-pipoca-agil.png';

export default function Header() {
	return (
		<S.Header>
			<Link to='/'>
				<S.Logo src={Logo}></S.Logo>
			</Link>
			<S.Navigation>
				<S.NavLink to='/'>Home</S.NavLink>
				<S.NavLink to='/'>Projetos</S.NavLink>
				<S.NavLink to='/'>Episódios</S.NavLink>
				<S.NavLink to='/'>Clube dos assinantes</S.NavLink>
				<S.NavLink to='/'>Contato</S.NavLink>
			</S.Navigation>
			<S.AuthButtons>
				<S.AuthText>Já é assintante?</S.AuthText>
				<S.Button to='/login'>Entrar</S.Button>
			</S.AuthButtons>
		</S.Header>
	);
}
