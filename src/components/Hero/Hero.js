import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! Welcome to
          <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I’m Rene Gonzalez a 13th-grade student who likes programming and
          mathematics. Interested in crypto and machine learning. <br /> Here
          you will find my projects, résumé and more so make sure you check it
          out!
        </SectionText>

        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
