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
      <SecondaryBtn>JavaScript</SecondaryBtn>
      <SecondaryBtn>Node.js</SecondaryBtn>
      <SecondaryBtn>React.js</SecondaryBtn>
      <SecondaryBtn>HTML</SecondaryBtn>
      <SecondaryBtn>CSS</SecondaryBtn>
      <SecondaryBtn>C/C++</SecondaryBtn>
      <SecondaryBtn>Java</SecondaryBtn>
      <SecondaryBtn>Python</SecondaryBtn>
      <SecondaryBtn>API</SecondaryBtn>
    </List>
  </Section>
);

export default Skills;
