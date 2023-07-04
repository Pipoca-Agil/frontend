import styled from 'styled-components';
/* eslint-disable */

export const RegisterWrapper = styled.div `
display: grid;
grid-template-rows:  8rem 1rem 1fr 1rem;
grid-template-columns: 5rem 1.5fr 1fr 5rem;
grid-template-areas:
'header header header header'
'. . . .'
'. photos formSection .'
'. . . .'
;
height: 100vh;
`
export const HeaderWrapper = styled.div`
background: linear-gradient(135deg, rgba(148, 20, 109, 0.80) 0%, rgba(241, 77, 26, 0.88) 100%);
box-shadow: 0px 0px 51px 0px rgba(0, 0, 0, 0.15);
 grid-area: header;
`
export const RegisterSection = styled.section`
display: flex;
flex-direction: column;
align-content: center;
border-radius: 0.5rem;
border: 2px solid #DCDCDC;
padding: 2rem;
grid-area: formSection;
`
export const Photos = styled.section`
grid-area: photos;
`
export const FormHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
color: #141414;
font-family: Inter;
font-style: normal;
line-height: 1rem;
`
/* eslint-disable */