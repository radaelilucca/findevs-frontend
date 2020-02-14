import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  
  img {
    width: 130px;    
    border-radius: 50%;
    border: 3px solid rgba(85, 58, 162, 1);
    transition: 0.1s linear;
    margin-top: 10px;

    &:hover {
      transform: scale(1.1);      
      margin-top: 25px;      
      border-radius: 5px;
    }

    @media(max-width: 415px){
      margin-top: 10px;
      width: 115px;
    }
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    color: #444444;
    margin-top: 5px;
    
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    color: rgba(85, 58, 162, 0.62);
    margin-bottom: 15px
    
    
  }

  a {

    text-decoration: none
  }

  p {
    margin-top: 15px;
    margin-bottom: 20px;
    
    font-weight: 500;
    font-size: 19px;
    text-align: center;
    color: #999999;
  }
`;

export const DevTechs = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  p {    
    color: #222;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.8; 
  }
  
`;

export const Buttons = styled.div`
 
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;

  div {
    display: flex;
   
    p {
      font-family: Roboto;
      font-size: 13px;
      text-align: center;
      margin-left: 5px;
      color: rgba(85, 58, 162, 0.42);
      @media(max-width: 415px){
      position: absolute;
      visibility: hidden;
    }
    }
  }
  .logout {
      button {color: rgba(85, 58, 162, 1);}
    }
  button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 28px;
    color: #666;
    
    
    &:hover {
      
    }

   
  }
`;
