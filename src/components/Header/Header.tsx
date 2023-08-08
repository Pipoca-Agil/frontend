import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../../styles/Header';
import Logo from '../../assets/logo-pipoca-agil.png';

export default function Header() {
	return (
		<S.Header>
			{/* <S.Wrapper> */}
			<Link to='/'>
				<S.Logo src={Logo}></S.Logo>
			</Link>
			<S.Navigation>
				<S.NavLink to='/'>Projetos</S.NavLink>
				<S.NavLink to='/'>Episódios</S.NavLink>
				<S.NavLink to='/'>Blog</S.NavLink>
				<S.NavLink to='/'>Contato</S.NavLink>
			</S.Navigation>
			{/* </S.Wrapper> */}
			<S.AuthButtons>
				<S.Button buttonType='type1' to='/login'>Login</S.Button>
				<S.Button buttonType='type2' to='/register'>Cadastro</S.Button>
			</S.AuthButtons>
		</S.Header>
	);
}
