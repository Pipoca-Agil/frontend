import * as S from '../../styles/Footer/styled';
import React from 'react';
import YoutubeLogo from '../../assets/icons/youtube-red-icon.svg'
import InstagramLogo from '../../assets/icons/instagram-red-icon.svg'
import FacebookLogo from '../../assets/icons/facebook-red-icon.svg'

export default function Footer() {
	return (
		<S.Wrapper>
			<S.LeftDiv>
				<S.Section logoSection={true}>
					<S.Icons url='/logo.svg' logo={true}/>
					<S.DefaultText>
					Copyright &copy; 2023, Pipoca Ágil. Todos os direitos reservados.
					</S.DefaultText>
				</S.Section>
				<S.Section logoSection={false}>
					<S.SectionTitle>Nos acompanhe nas redes sociais</S.SectionTitle>
					<S.IconsDiv>
						<S.Icons url={YoutubeLogo} href="https://www.youtube.com/@PipocaAgil" target="_blank"/>
						<S.Icons url={InstagramLogo}  href="https://www.instagram.com/pipocaagil/" target="_blank"/>
						<S.Icons url={FacebookLogo}  href="https://www.facebook.com/pipocaagil/" target="_blank"/>
					</S.IconsDiv>
				</S.Section>
			</S.LeftDiv>
			<S.RightDiv>
				<S.Section logoSection={false}>
					<S.SectionTitle>Home</S.SectionTitle>
					<S.List>
						<S.Links to={'/'}>Últimos episódios</S.Links>
						<S.Links to={'/'}>Os 10 mais ouvidos</S.Links>
						<S.Links to={'/'}>Tour</S.Links>
					</S.List>
				</S.Section>
				<S.Section logoSection={false}>
					<S.SectionTitle>Quem Somos</S.SectionTitle>
					<S.List>
						<S.Links to={'/'}>Quem é Ibson Cabral</S.Links>
						<S.Links to={'/'}>Blog</S.Links>
						<S.Links to={'/'}>Parcerias</S.Links>
						<S.Links to={'/'}>Patrocinadores</S.Links>
						<S.Links to={'/'}>Projetos</S.Links>
						<S.Links to={'/'}>Livros</S.Links>
					</S.List>
				</S.Section>
				<S.Section logoSection={false}>
					<S.SectionTitle>Clube de Assinantes</S.SectionTitle>
					<S.List>
						<S.Links to={'/'}>FAQ</S.Links>
						<S.Links to={'/'}>Planos</S.Links>
						<S.Links to={'/'}>Login</S.Links>
					</S.List>
				</S.Section>
			</S.RightDiv>
		</S.Wrapper>
	);
}
