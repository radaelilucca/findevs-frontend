/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { FaGithubAlt, FaLock } from 'react-icons/fa';

import {
  Input,
  Button,
  Form,
  InputGroup,

} from './styles';

import api from '../../services/api';

export default function SignInForm({ history }) {
  const [gitUser, setGitUser] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        github_user: gitUser,
        password,
      });
      const { token } = response.data;

      localStorage.setItem('findevs-token', token);

      history.push('/app');
    } catch (err) {
      const { error: loginError } = err.response.data;


      await Swal.fire({
        title: `${loginError}`,
        icon: 'error',
        confirmButtonColor: '#7159c1',
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <FaGithubAlt className="icon" />
        <Input
          placeholder="GitHub User"
          name="gitUser"
          value={gitUser}
          required
          onChange={(e) => setGitUser(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <FaLock className="icon" />
        <Input
          type="password"
          placeholder="Password"
          name="pass"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
      </InputGroup>
      <div className="links">
        <Link to="/signup">Have you not an account yet? Sign up now!</Link>
      </div>
      <Button type="submit">Login</Button>
    </Form>


  );
}
