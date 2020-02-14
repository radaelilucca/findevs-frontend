import styled from 'styled-components';

export const Form = styled.form`
  justify-content: space-between;
  padding: 1rem;

  .links {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-bottom: 1rem
  }

  .links a {
    text-decoration: none;
    color: #829FD9;
    transition: color 0.5s ease;
  }

  .links a:hover {
    color: #7159c1
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;  
  border-bottom: 1px solid #aaa;
  margin-bottom: 1rem;
  transition: 0.1s linear;

  &:hover {
    border-bottom: 1px solid #553aa2;
  }

  .icon {
    font-size: 20px;
    color: #aaa;
    transition: color 0.5s ease;
    width: 20px;
    display: inline-block
  }

  &:hover .icon {
    color: #553aa2;
  }
`;
export const Input = styled.input`
  width: calc(100% - 28px);
  border: 0;
  font-family: Poppins;
  font-size: 13px;
  color: #7159c1;
  opacity: 0.8;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;

  &::placeholder {
    color: #555555;
  }
`;

export const Button = styled.button`
  height: 40px;
  background: #573ca3;
  font-family: Poppins;
  font-style: normal;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  color: #ffffff;
  margin-top: 0;
  transition: all .5s ease;
  border: 0;
  opacity: 0.8;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 1
  }
`;
