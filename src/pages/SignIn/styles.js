import styled from 'styled-components';

export const Container = styled.div`
  background: #7159c1;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    240.84deg,
    #553aa2 0.09%,
    rgba(85, 58, 162, 0.95) 16.86%,
    rgba(85, 58, 162, 0.9) 28.38%,
    rgba(85, 58, 162, 0.85) 39.87%,
    rgba(85, 58, 162, 0.75) 51.19%,
    rgba(85, 58, 162, 0.65) 62.48%,
    rgba(85, 58, 162, 0.55) 72.16%,
    rgba(85, 58, 162, 0.45) 84.15%,
    rgba(85, 58, 162, 0.4) 100%
  );

  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 520px;
  background: #ffffff;
  border-radius: 15px;




  @media (max-width: 400px){
    width: 80%;
    height: 460px;

  }
`;
