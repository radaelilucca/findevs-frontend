import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1rem;
  display: flex;

  
  

  @media only screen and (min-width: 48em) {
    padding: 0;
  }
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background: #FFF;

  @media only screen and (min-width: 40em) {
    padding: 1rem;
    position: absolute;
    bottom: calc(40px + 3rem);
    z-index: 1;
    left: calc((100% - 1050px) / 2);
  }
`;
