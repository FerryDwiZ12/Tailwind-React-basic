import React from "react";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import logo from "../../logo.svg";

const Hero = styled.div`
  background: url("gambar.jpg") no-repeat center right;

  background-size: cover;
  color: #000;
  font-size: 20px;
  text-align: center;
  display: grid;
  grid-template-columns: 10px 2fr 10px;
  grid-template-rows: 0.5fr 1fr 20px;
  grid-gap: 20px;

  img {
    margin: auto;
    padding-top: 1rem;
    grid-column: 2/3;
    grid-row: 1/2;
    height: 165px;
  }

  article {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  article h1 {
    font-weight: bold;
    font-size: 40px;
  }

  button {
    background-color: #fff;
    border-radius: 4px;
    border: #fff;
    color: #2abadf;
    font-size: 1rem;
    padding: 5px 10px;
    margin: 0.75rem auto 0;
    cursor: pointer;
  }
`;

export default function Headers() {
  return (
    <Hero>
      <img src={logo} alt='gambar' />

      <article>
        <h1> Welcome to Bebek</h1>
        <a>
          Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visu <br></br>
        </a>
        <button>
          Get In Started <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </article>
    </Hero>
  );
}
