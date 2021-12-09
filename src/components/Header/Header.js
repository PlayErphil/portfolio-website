import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineFilePdf, AiOutlineMail } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <DiCssdeck size="3rem" /> <span> Portfolio </span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#resume">
          <NavLink>Resume</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/PlayErphil">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="resume">
        <AiOutlineFilePdf size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:reneleogp0305@gmail.com?subject=SendMail&body=Description">
        <AiOutlineMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
