import React, { useEffect } from 'react';

import {
  Container,
  LoginBox,
} from './styles';

import '../../global.css';
import SignInForm from '../../components/SignInForm';

import { getToken } from '../../services/auth';

function SignIn({ history }) {
  // look for a saved token
  useEffect(() => {
    const token = getToken();
    if (token) {
      history.push('/app');
    }
  }, []);

  // mover esta lógica para outro arquivo.


  return (
    <Container>
      <LoginBox>
        <SignInForm history={history} />
      </LoginBox>
    </Container>
  );
}
export default SignIn;
