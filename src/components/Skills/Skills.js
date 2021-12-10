import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SecondaryBtn,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ListSkills,
} from "./SkillsStyles";

const Skills = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <List>
      <SecondaryBtn>JS</SecondaryBtn>
      <SecondaryBtn>React</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>
      <SecondaryBtn>Back</SecondaryBtn>

      {/* <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>*/}
    </List>
  </Section>
);

export default Skills;
