import styled from 'styled-components';


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
