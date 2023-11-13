import React, { useState } from 'react';
import ListImage from './List.png';
import LogoImage  from '../../pages/Login/Imgs/LogoPipocaAgil.png';
import * as S from './style';
const HeaderToggle = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleHeader = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <S.Wrapper>
        <div>
          <S.ImageButton onClick={toggleHeader}>
            <img src={ListImage} alt='headertoggle' />
          </S.ImageButton>
        </div>
        <div>
          <S.ImageLogo src={LogoImage} alt='logoImage' />
        </div>
        <S.Button to='/login'>Entrar</S.Button>
      </S.Wrapper>

      {isDropdownVisible && (
        <S.OptionsWapper>
          <nav>
            <ul>
              <S.ListItens>Projetos</S.ListItens>
              <S.ListItens>Episódios</S.ListItens>
              <S.ListItens>Clube de Assinantes</S.ListItens>
              <S.ListItens>Contato</S.ListItens>
            </ul>
          </nav>
        </S.OptionsWapper>
      )}
    </>
  );
};

export default HeaderToggle;

