import styled, {css} from 'styled-components';
/* eslint-disable @typescript-eslint/naming-convention */

export const Balloons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 50%;
height: 80%;
gap: 4rem;
&.right {
    align-self: flex-end;
}
`;
export const BalloonsWrapper = styled.div`
justify-content: space-between;
display:  flex;
gap: 4rem;
width: 30rem;
height: 60rem;
position: relative;
float: right;
padding: 3rem;
`;
