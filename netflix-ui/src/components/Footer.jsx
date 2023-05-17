import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navOptions = [
    { name: "Home", link: "/" },
    { name: "Séries", link: "/tv" },
    { name: "Filmes", link: "/movies" },
    { name: "Minha lista", link: "/mylist" },
  ];

  const termsAndHelp = [
    { name: "Termos e Serviços", link: "/terms" },
    { name: "Privacidade e Política", link: "/privacy" },
    { name: "Ajuda", link: "/help" },
  ];

  return (
    <FooterContainer>
      <div className="footer-content flex">
        <div className="brand">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-options">
          {navOptions.map(({ name, link }) => (
            <Link key={name} to={link}>
              {name}
            </Link>
          ))}
        </div>
        <div className="terms-help">
          {termsAndHelp.map(({ name, link }) => (
            <Link key={name} to={link}>
              {name}
            </Link>
          ))}
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/calllifeocial/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 2rem;
  background-color: black;
  color: white;

  .footer-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .brand {
      img {
        height: 4rem;
      }
    }

    .nav-options,
    .terms-help {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      a {
        color: white;
        text-decoration: none;
        &:hover {
          color: #f34242;
        }
      }
    }

    .social-media {
      display: flex;
      gap: 1rem;

      a {
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        &:hover {
          color: #f34242;
        }
      }
    }
  }
`;
