import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  FoterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:9777160598">9777160598</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:pradhanrahul3346@gcekbpatna.ac.in">
            Send me a Message
          </LinkItem>
        </LinkColumn>
        <SocialContainer>
          <CompanyContainer>
            <Slogan>Innovating One project at a time</Slogan>
          </CompanyContainer>
          <SocialIconsContainer>
            <SocialIcons href="https://github.com/rahulp18">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/rahul-pradhan-c0d8">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.instagram.com/rahulp18.happy/">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialIconsContainer>
        </SocialContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
