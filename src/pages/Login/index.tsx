import React, { useState, useEffect } from 'react';
import { StyledLoginPage, LogoImage, Title, SubTitle, FormStyle, ImageWrapper, Image, InputComponent, LableStyle, FormGroup, PasswordSpan, Body, Button, CheckBoxWapper, CheckBox, SpanText, LinkDetalhes, CadastreseDiv, CadastreseText,CadastreseText2, PassowrdWrapper, Icon } from './style'
import LogoPipocaAgil from './Imgs/LogoPipocaAgil.png'
import ImagemLogin from './Imgs/ImagemLogin.png'
import { Link } from 'react-router-dom';


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
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState
  (false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styleColor = {
    color: "#B33B3B",
  }

  const emailValidation = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  }

  const validatePassword = (password: string): boolean => {
    // Validação de senha: entre 8 e 12 caracteres, letras, números e caracteres especiais
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,12}$/;
    const isValid = regex.test(password);
    setIsPasswordValid(isValid);
    return isValid;
  };

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    switch (true) {
      case !emailValidation(formData.email):
        alert('Por favor, insira um email válido.');
        break;
      case !validatePassword(formData.password):
        alert(
          'Por favor, insira uma senha válida. A senha deve ter entre 8 e 12 caracteres, incluindo letras, números e caracteres especiais.'
        );
        break;
      case !emailValidation(formData.email) && !validatePassword(formData.password):
        alert('Email e senha inválidos.');
        break;
      default:
        break;
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                Senha
            <PassowrdWrapper>
            <InputComponent
              className='passWordInput' 
              placeholder='****************'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              />
                <Icon
                  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                  onClick={togglePasswordVisibility}
                ></Icon>
            </PassowrdWrapper>    
            </LableStyle>
            <PasswordSpan>Esqueci minha senha</PasswordSpan>
            </FormGroup>
            <Button
            
            style={{
              backgroundColor: isFormValid ? '#B33B3B' : '#bdbdbd',
              color: isFormValid ? 'white' : '#455f6b'
            }}
            >Continuar
            </Button>
            <CheckBoxWapper>
              <CheckBox />
              <SpanText>Mantenha-me Conectado</SpanText>
              <LinkDetalhes>Detalhes</LinkDetalhes>
            </CheckBoxWapper>
        <CadastreseDiv>
        <CadastreseText>Ainda não é assinante?</CadastreseText>
        <CadastreseText2><Link style={styleColor} to={"/register"} >Cadastre-se</Link> e conheça as vantagens</CadastreseText2>
        </CadastreseDiv>
      </form>
      </FormStyle>
    </StyledLoginPage>
      <ImageWrapper>
        <Image src={ImagemLogin} alt="Ibson podcast pipoca ágil" />
      </ImageWrapper>

  </Body>
  )
};