/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { useFormik } from 'formik';
import {
  FaGithubAlt, FaKey, FaCompass, FaCode,
} from 'react-icons/fa';

import { Form } from './styles';

import api from '../../services/api';
import logo from '../../assets/Logo3.png';

export default function SignUpForm({ history }) {
  async function handleSubmit(values) {
    values.preventDefault();
    alert('chamou');
    console.log(values);
  }

  const formik = useFormik({
    initialValues: {
      github_user: '',
      password: '',
      confirmPassword: '',
      techs: '',
      latitude: '9999',
      longitude: '1010',
    },
    onSubmit: async ({
      github_user, password, confirmPassword, techs, latitude, longitude,
    }) => {
      try {
        console.log('entrou try');
        await api.post('/devs', {
          github_user,
          password,
          confirmPassword,
          techs,
          latitude,
          longitude,
        });

        history.push('/');
      } catch (error) {
        console.log(error);
        alert('Error');
      }
    },

  });

  return (

    <Form onSubmit={formik.handleSubmit}>
      <img src={logo} alt="FinDevs" />
      <div className="input-block">
        <label htmlFor="GitHub User">
          <FaGithubAlt />
        </label>
        <input
          name="github_user"
          id="github_user"
          placeholder="GitHub User"
          required
          value={formik.values.github_user}
          onChange={formik.handleChange}

        />
      </div>

      <div className="input-block">
        <label htmlFor="password">
          <FaKey />
        </label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}

        />
        <input
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}

        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">
          <FaCode />
        </label>
        <input
          name="techs"
          id="techs"
          placeholder="Your main Techs splited by comma"
          required
          value={formik.values.techs}
          onChange={formik.handleChange}

        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="location">
            <FaCompass />
          </label>
          <input
            name="Latitude"
            type="number"
            id="Latitude"
            placeholder="Latitude"
            value={formik.values.latitude}
            onChange={formik.handleChange}


          />
          <input
            name="Longitude"
            type="number"
            id="Longitude"
            placeholder="Longitude"
            value={formik.values.longitude}
            onChange={formik.handleChange}


          />
        </div>
      </div>
      <button type="submit">New Dev</button>


    </Form>

  );
}
