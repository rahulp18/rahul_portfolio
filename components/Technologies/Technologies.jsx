import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJava } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './style';
const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked with a range of technoliges in the development world, From
        Design to Bakend
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experence with <br />
              React.Js Next.Js Tailwind.Css MUI Chakta-UI
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experence with <br />
              Node.js Express, MongoDB,MySql
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experence with <br />
              Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiJava size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Languages</ListTitle>
            <ListParagraph>
              Experence with <br />
              JAVA, C,PYTHON,JS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />{' '}
    </Section>
  );
};

export default Technologies;
