/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const ImgHome = styled.img`
width: 100%;
height: calc(100vh - 8rem);
`;
export const HomeContainer = styled.div`
display: grid;
grid-template-rows: 8rem 1fr;
grid-template-columns: 1fr;
grid-template-areas:
'header'
'imgHome'
;
`;
