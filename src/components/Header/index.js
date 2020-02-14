import React from 'react';

import { Link } from 'react-router-dom';

import { FaUser, FaUserPlus, FaMapMarkerAlt } from 'react-icons/fa';
import { Container, Navigation, HeaderImage } from './styles';

export default function Header() {
  return (
    <Container>
      <Navigation>
        <div className="wrap">
          <div className="logo">
            <FaMapMarkerAlt className="icon" />
            <span>
              <strong>F</strong>
              in
              <strong>D</strong>
              evs
            </span>
          </div>
          <div className="signup">
            <span>Have you not an account yet?</span>
            <Link to="/signup"><button>Sign Up Now</button></Link>
            <Link to="/signup"><FaUserPlus className="icon" /></Link>
          </div>
        </div>
      </Navigation>
      <HeaderImage>
        <img src="https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg" />
        <div className="message">
          Encontre
          <br />
          Converse
          <br />
          Interaja
        </div>
      </HeaderImage>
    </Container>
  );
}
