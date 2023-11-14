/* eslint-disable @typescript-eslint/naming-convention */
import styled from 'styled-components';

export const IntroWrapper = styled.section`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    gap: 10rem;
    padding-block: 3rem;

    @media (max-width: 926px) and (max-height: 926px) {
        flex-direction: column;
        max-width: 100%;
        padding-block: 2rem;
      }
`;