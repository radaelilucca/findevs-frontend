import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 35px;
    color: #553aa2;
  }

  img {
    width: 55%;
  }

  p{
    margin-top: 20px;
    font-size: 20px;
    color: #8888;
    opacity: 0.9;
  }

  a {
    font-size: 25px;
    text-decoration: none;
    margin-top: 5px;
  }

  @media (max-width: 400px){
    img {
      width: 60%;
    }

  }
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: rgba(102, 102, 102, 0.55);
  margin-bottom: 30px;
  @media (max-width: 400px){
    font-size: 20px;

  } 
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 60px;  
  border-bottom: 2px solid #553aa2;
  box-sizing: border-box;
  margin-bottom: 18px;
  transition: 0.1s linear;
  &:hover{
    width: 95%;
  }
  @media (max-width: 400px){
    width: 280px;
    height: 50px; 

  } 
`;
export const Input = styled.input`
  width: 80%;
  background: none;
  border: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  color: #573ca3;
  opacity: 0.6;
  display: flex;
  align-items: center;
  text-align: center;  
`;

export const Button = styled.button`
  width: 200px;
  height: 45px;
  background: #573c99;
  border-radius: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: 0.05s linear;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    transform: scaleX(1.06);
    background: #8e4dff;
  }
`;
