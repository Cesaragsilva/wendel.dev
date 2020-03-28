import React from 'react';
import { FiBook, FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineTrophy } from 'react-icons/ai';
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaRegUser } from 'react-icons/fa';

const Default = `
  &:hover {
    color: #dd7e09;
    cursor: pointer;
  }
`;

const Home = styled(AiOutlineHome)`
  ${Default}
`;

const About = styled(FaRegUser)`
  ${Default}
`;

const Achievements = styled(AiOutlineTrophy)`
  ${Default}
`;

const Blog = styled(FiBook)`
  ${Default}
`;

const Twitter = styled(FaTwitter)`
  ${Default}
`;
const Facebook = styled(FaFacebookF)`
  ${Default}
`;
const Linkedin = styled(FaLinkedinIn)`
  ${Default}
`;
const Github = styled(FiGithub)`
  ${Default}
`;

export const links = [
  {
    id: 'Home',
    icon: <Home size="25" />,
    url: '/'
  },
  {
    id: 'about',
    icon: <About size="20" />,
    url: '/about'
  },
  {
    id: 'Achievements',
    icon: <Achievements size="25" />,
    url: '/achievements'
  },
  {
    id: 'Blog',
    icon: <Blog size="25" />,
    url: '/blog'
  }
];

function handleSocialNetwork(url) {
  return window.open(url, '__blank');
}

export const networks = [
  {
    icon: <Twitter onClick={() => handleSocialNetwork('https://twitter.com/hey_wendelzinho')} />
  },
  {
    icon: <Facebook onClick={() => handleSocialNetwork('https://www.facebook.com/wendel.freitas.90/')} />
  },
  {
    icon: <Linkedin onClick={() => handleSocialNetwork('https://www.linkedin.com/in/wendelfb/')} />
  },
  {
    icon: <Github onClick={() => handleSocialNetwork('https://github.com/wendelfreitas')} />
  }
];