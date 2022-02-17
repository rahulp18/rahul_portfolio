import React from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constant/constants';
const Project = () => {
  return (
    <Section onPadding id="projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map((item) => (
          <BlogCard key={item.id}>
            <Img src={item.image} />
            <TitleContent>
              <HeaderThree title>{item.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{item.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {item.tags.map((t, i) => (
                  <Tag key={i}>{t}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={item.source}>Code</ExternalLinks>
              <ExternalLinks href={item.visit}>Live</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Project;
