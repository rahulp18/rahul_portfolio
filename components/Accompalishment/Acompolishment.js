import React from 'react';
import { Box, Boxes, BoxNum, BoxText } from './style';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';

const data = [
  { number: 34, text: 'Projects' },
  { number: 1, text: 'Internship' },
  { number: 4, text: 'Programming Lang' },
  { number: 16, text: 'Github Stars' },
];

const Acompolishment = () => {
  return (
    <Section>
      <SectionTitle>Personal Archivments</SectionTitle>
      <Boxes>
        {data.map((d, index) => (
          <Box key={index}>
            <BoxNum>{`${d.number}`}</BoxNum>
            <BoxText>{`${d.text}`}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acompolishment;
