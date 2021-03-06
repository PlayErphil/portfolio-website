import Link from "next/link";
import React from "react";
import {
  AiFillFilePdf,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineFilePdf,
  AiOutlineMail,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { Document } from "react-pdf";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href={"/"}>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>Rene Gonzalez</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href={"#projects"}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#skills"}>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link
          href={"/Resume.pdf"}
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/PlayErphil">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="mailto:reneleogp0305@gmail.com">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
