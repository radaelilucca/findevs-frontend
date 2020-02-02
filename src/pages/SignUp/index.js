import React, {img} from 'react';
import {Formik} from 'formik'

import { Container, 
  SignUpBox, 
  SideBox, 
  Input,
  Button, 
  Form} from './styles';

import '../../global.css'
import logo from '../../assets/Logo3.png'

export default function Login() {
  return (
    <Container>

      
      <SignUpBox>  
        <Formik>
          <Form>
          <img src={logo}/>
            <Input autocomplete="off" placeholder="GitHub User" name='gitUser'></Input>
            <Input type="password" placeholder="Create a secret Password" name='pass'></Input>
            <Input type="password" placeholder="Repeat your secret Password" name='pass'></Input>
            <Button>SIGN UP</Button>
          </Form>

          
        </Formik>  
      </SignUpBox>
      <SideBox>
       <h1>Hello, Dev!</h1>
       <h2>Create an Account and find some Devs arround you!</h2>
       <p>Already have an Account?</p>
       <Button>SIGN IN</Button>

      </SideBox>


    </Container>
  );
}
