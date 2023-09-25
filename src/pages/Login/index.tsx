import React, { useState } from 'react';
import { StyledLoginPage, LogoImage, Title, SubTitle, FormStyle, ImageWrapper, Image, InputComponent, LableStyle, FormGroup, PasswordSpan, Body, Button, CheckBoxWapper, CheckBox, SpanText, LinkDetalhes } from './style'
import LogoPipocaAgil from './Imgs/LogoPipocaAgil.png'
import ImagemLogin from './Imgs/ImagemLogin.png'

type LoginData = {
  email: string,
  password: string,
}

export default function Login() {
  // Estado tipado com LoginData
  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <Body>
    <LogoImage>
      <img src={LogoPipocaAgil} alt='Logo podcast Pipoca Ágil'
      />
    </LogoImage>
    <StyledLoginPage>
      <FormStyle>
        <Title>Área do assinante</Title>
        <SubTitle>Tenha acesso a conteúdos inovadores</SubTitle>
          <form>
            <FormGroup>
            <LableStyle>
                Login
            <InputComponent 
              placeholder='email@email.com'
              type='text'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              />
            </LableStyle>
            </FormGroup>
            <FormGroup>
            <LableStyle>
                Password
            <InputComponent 
              placeholder='senha'
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              />
            </LableStyle>
            <PasswordSpan>Esqueci minha senha</PasswordSpan>
            </FormGroup>
            <Button>Continuar</Button>
            <CheckBoxWapper>
              <CheckBox />
              <SpanText>Mantenha-me Conectado</SpanText>
              <LinkDetalhes>Detalhes</LinkDetalhes>
            </CheckBoxWapper>
          </form>
      </FormStyle>
      <ImageWrapper>
        <Image src={ImagemLogin} alt="Ibson podcast pipoca ágil" />
      </ImageWrapper>
    </StyledLoginPage>
  </Body>
  )
};