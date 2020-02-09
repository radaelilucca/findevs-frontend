/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const CreateAccount = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 22px;
    margin-top: 5px;

  }

  a {
    margin-top: 5px;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
    color: #8100e5;
    opacity: 0.8;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 415px){
      align-items: center;
      margin-bottom: 20px;
    }

  .input-block {
    display: flex;
    align-items: center;
          
  }

  .techs-block {
    display: flex;
    align-items: center;

    input {
      width: 330px;
      @media(max-width: 415px){
      width: 250px;
   
    
    }
    }

   
          
  }

  .location-block {
    display: flex;
    align-items: center;
   

    @media(max-width: 415px){
      flex-direction: column;
      align-items: flex-start;
      
     
    }

  }

  .password-block {
    display: flex;
    align-items: center;
  
   

    @media(max-width: 415px){
      display: flex;
      flex-direction: column;
   
    
    }

  }

  label {
    font-size: 32px;
    color: #7159c1;
    margin-left: 10px;

    @media(max-width: 415px){
      position: absolute;
        visibility: hidden;
    }

  }

  input {
    border: none;
    border-bottom: 2px solid #4f389b;
    background: none;
    margin-left: 10px;
    margin-top: 13px;
    margin-bottom: 25px;
    width: 160px;
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
    
    @media(max-width: 415px){
      width: 250px;
      margin-bottom: 20px;
      margin-top: 3px;

      ::placeholder {
        font-size: 16px;
      }
  }
  }


  button {
    background: rgba(87, 60, 163, 0.95);
    border-radius: 16px;
    width: 250px;
    height: 40px;
    align-self: center;
    color: #fff;
    font-size: 25px;
    margin-top: 5px;
    cursor: pointer;
    transition: 0.1s linear;

    &:hover {
      transform: scale(1.1);
      background: #8100e5;
      font-weight: bold;
    }

  }



  img {
    width: 65%;
    margin-bottom: 5px;
    align-self: center;
  }


`;
