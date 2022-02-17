import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';
const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            <DiCssdeck size="3rem" />{' '}
            <span style={{ fontSize: '2rem' }}>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" passHref>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/rahulp18">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/rahul-pradhan-c0d8">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/rahulp18.happy/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
