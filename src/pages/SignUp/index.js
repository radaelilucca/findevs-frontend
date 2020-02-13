/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import {
  Container, SignUpBox,
} from './styles';

import '../../global.css';

import SignUpForm from '../../components/SignUpForm';

export default function SignUp({ history }) {
  return (
    <Container>
      <SignUpBox>
        <SignUpForm history={history} />
      </SignUpBox>
    </Container>
  );
}
