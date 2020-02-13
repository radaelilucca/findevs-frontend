/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaGithubAlt, FaBan, FaMapMarkedAlt } from 'react-icons/fa';
import './styles.css';

// import Swal from 'sweetalert2'

export default function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>

      <p>{dev.bio}</p>

      <div className="dev-buttons">
        <a
          href={`https://github.com/${dev.github_user}`}
          target="blank"
        >
          <button
            title={`Check ${dev.name}'s Github`}
            type="button"
            className="github-button"
          >
            <FaGithubAlt />
          </button>
        </a>
        <button
          className="map-button"
          title="This feat is under construction for now!"
          type="button"


        >
          <FaMapMarkedAlt />
        </button>
        <button
          title="This feat is under construction for now!"
          type="button"
          className="block-button"


        >
          <FaBan />
        </button>
      </div>
    </li>
  );
}
