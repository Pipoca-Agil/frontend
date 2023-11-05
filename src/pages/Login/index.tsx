import React, { useState, useEffect } from 'react';
import { StyledLoginPage, LogoImage, Title, SubTitle, FormStyle, ImageWrapper, Image, InputComponent, LableStyle, FormGroup, PasswordSpan, Body, Button, CheckBoxWapper, CheckBox, SpanText, LinkDetalhes, CadastreseDiv, PassowrdWrapper, HiddenLabel, HiddenChackboxWapper, ButtonsWrapper, ErrorMessage, EyeIcon, LinkLogin } from './style'
import LogoPipocaAgil from './Imgs/LogoPipocaAgil.png'
import ImagemLogin from './Imgs/ImagemLogin.png'
import ErrorIcon from './Imgs/password_requirements_check.png'
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

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
  const [isPasswordValid, setIsPasswordValid] = useState
  (false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorInput, setErrorInput] = useState(false);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,12}$/;

    setIsEmailValid(emailRegex.test(formData.email));
    setIsPasswordValid(passwordRegex.test(formData.password));
  }, [formData.email, formData.password]);
 
  useEffect(() => {
    handleMobile(); // Executa a função quando o componente é montado
  
    // Adiciona um ouvinte de redimensionamento da janela para atualizar quando a tela for redimensionada
    window.addEventListener("resize", handleMobile);
  
    // Remove o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);

    if (!isEmailValid || !isPasswordValid) {
      setError('Ocorreu um problema ao fazer login, Verificar seu e-mail ou senha, ou crie uma conta');
      setErrorInput(true);
      return;
    } else {
      setError('');
      setErrorInput(false);
    }
  };

   const handleMobile = () => {
      const windowWidth = window.innerWidth;
    
      if(windowWidth <= 926) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
   }

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Body>
    <LogoImage>
      <Link to='/'>
      <img src={LogoPipocaAgil} alt='Logo podcast Pipoca Ágil'
      />
      </Link>
    </LogoImage>
    <StyledLoginPage>
      <FormStyle>
        <Title>Área do assinante</Title>
        <SubTitle>Tenha acesso a conteúdos inovadores</SubTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              {
                isMobile ? (
                  <HiddenLabel>
                    Login
                  </HiddenLabel>
                ) : (
                  <LableStyle>
                Login
                </LableStyle>
                )
              }
            <InputComponent 
              placeholder='email@email.com'
              type='text'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              isError = {errorInput}
              />
            </FormGroup>
            <FormGroup>
            {
                isMobile ? (
                  <HiddenLabel>
                    Senha
                  </HiddenLabel>
                ) : (
                  <LableStyle>
                    Senha
                </LableStyle>
                )
              }
            <PassowrdWrapper>
            <InputComponent
              className='passWordInput'
              placeholder='Senha'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              isError = {errorInput}
              />
                {showPassword ? (
                  <EyeIcon>
                    <VisibilityOffOutlinedIcon
                    style={ {fontSize: 'large'} }
                    onClick={togglePasswordVisibility} />
                  </EyeIcon>
                   ) : (
                    <EyeIcon>
                      <RemoveRedEyeOutlinedIcon
                      style={ {fontSize: 'large'} }
                      onClick={togglePasswordVisibility} />
                    </EyeIcon>
                  )}
            </PassowrdWrapper>
            {
              submitted && error  && (
                <ErrorMessage>
                  <img src={ErrorIcon} alt='Icone de erro'/>
                  {error}
                </ErrorMessage>
              )
            }
            <PasswordSpan>Esqueci minha senha</PasswordSpan>
            </FormGroup>
            <ButtonsWrapper>

            <Button
            >Continuar
            </Button>
            {
              isMobile ? (
                <HiddenChackboxWapper>
                  <SpanText>Mantenha-me Conectado</SpanText>
                <LinkDetalhes>Detalhes</LinkDetalhes>
                </HiddenChackboxWapper>
              ) : (
                <CheckBoxWapper>
              <CheckBox />
              <SpanText>Mantenha-me Conectado</SpanText>
              <LinkDetalhes>Detalhes</LinkDetalhes>
            </CheckBoxWapper>
              )
            } 
            <br/>
        <CadastreseDiv>
        Ainda não é assinante?
        <br></br>
        <LinkLogin to="/register" >Cadastre-se</LinkLogin> e conheça as vantagens
        </CadastreseDiv>
            </ButtonsWrapper>
      </form>
      </FormStyle>
    </StyledLoginPage>
      <ImageWrapper>
        <Image
          src={ImagemLogin}
          alt="Ibson podcast pipoca ágil"/> 
        
      </ImageWrapper>
  </Body>
  )
};