import React from 'react';
import { LeftSection } from './HrosStyles';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
const Hero = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to
          <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a Full Stack Developer. I am a complex human being with a curios
          mind hanging out in tech world.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
