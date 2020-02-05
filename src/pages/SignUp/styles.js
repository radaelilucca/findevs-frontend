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

export const SignUpBox = styled.div`
  width: 490px;
  height: 450px;
  background: #ffffff;
  border-radius: 15px;
`;

export const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 490px;
  height: 450px;
  background: #ffffff;
  border-radius: 15px;
  margin-right: 10px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    text-align: center;
    color: #553aa2;
    margin-bottom: 20px;
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #666666;
    margin-bottom: 45px;
    margin-top: 35px;
  }

  p {
    margin-top: 25px;
    font-weight: bold;
    font-size: 18px;
    line-height: 41px;
    color: rgba(102, 102, 102, 0.75);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .input-block {
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    margin-left: 20px;

    #techs {
      width: 400px;
    }
  }

  label {
    font-size: 32px;
    color: #7159c1;
  }

  input {
    border: none;
    border-bottom: 2px solid #4f389b;
    background: none;
    margin-left: 10px;
    width: 200px;
    font-size: 18px;
    color: red;
    text-align: center;
    color: #333;
    transition: 0.1s linear;

    ::placeholder {
      color: rgba(113, 89, 193, 0.35);
    }

    &:focus {
      border-bottom: 2px solid #8100e5;
      transform: scale(1.03);
    }
  }

  button {
    background: rgba(87, 60, 163, 0.95);
    border-radius: 16px;
    width: 250px;
    height: 40px;
    align-self: center;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: 0.1s linear;

    &:hover {
      transform: scale(1.1);
      background: #8100e5;
      font-weight: bold;
    }
  }

  img {
    width: 40%;
    margin-bottom: 10px;
    align-self: center;
  }
`;

export const Button = styled.button`
  background: rgba(87, 60, 163, 0.95);
  border-radius: 16px;
  width: 250px;
  height: 40px;
  align-self: center;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.1s linear;
  margin-top: 20px;

  &:hover {
    transform: scale(1.1);
    background: #8100e5;
    font-weight: bold;
  }
`;
