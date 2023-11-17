import React, { useState, useRef, useEffect } from 'react';
import ListImage from './List.png';
import LogoImage from '../../pages/Login/Imgs/LogoPipocaAgil.png';
import * as S from './style';

const HeaderToggle = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleHeader = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      !buttonRef.current?.contains(event.target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.Wrapper>
        <div>
          <S.ImageButton ref={buttonRef} onClick={toggleHeader}>
            <img src={ListImage} alt='headertoggle' />
          </S.ImageButton>
        </div>
        <div>
          <S.ImageLogo src={LogoImage} alt='logoImage' />
        </div>
        <S.Button to='/login'>Entrar</S.Button>
      </S.Wrapper>

      {isDropdownVisible && (
        <S.OptionsWapper ref={dropdownRef}>
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
