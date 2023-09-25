import React from 'react';
import { StyledLoginPage, LogoImage } from './style'
import LogoPipocaAgil from './Imgs/LogoPipocaAgil.png'
import ImagemLogin from './Imgs/ImagemLogin.png'

export default function Login() {
  return (
    <>
    <LogoImage>
      <img src={LogoPipocaAgil} alt='Logo podcast Pipoca Ágil'
      />
    </LogoImage>
    <StyledLoginPage>
      <form>
          
      </form>
      <img src= {ImagemLogin} alt= 'Imagem Ibson podcast pipipoca ágil' />
    </StyledLoginPage>
  </>
  )
}
