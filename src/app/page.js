"use client";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { darkTheme, lightTheme } from "@/utils/Themes";
import HeroSection from "@/components/HeroSection";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ProjectDetails from "@/components/ProjectDetails";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const router = useRouter();
  if (typeof document !== "undefined") {
    console.log("");
  }
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <Navbar />
        <Body>
          <HeroSection to="/" />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </>
    </ThemeProvider>
  );
};
export default Home;
