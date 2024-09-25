import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import img from "../../../public/zurag.jpg";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";
import { Bio } from "@/data/constants";
import html2pdf from "html2pdf.js"; // Make sure to import html2pdf
import resume from "../../../public/resume.png";
const HeroSection = () => {
  const [hide, setHide] = useState(false);
  const downloadPDF = async () => {
    const filename = "resume.pdf"; // Change to 'resume.pdf' for clarity

    try {
      const element = document.getElementById("resume-content");
      // Make sure to have an ID for the content you want to download
      const opt = {
        margin: 1,
        filename: filename,
        image: { type: { resume }, quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "in",
          format: "letter",
          orientation: "portrait",
        },
      };
      setHide(true);

      await html2pdf().set(opt).from(element).save();
      setHide(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton onClick={downloadPDF}>Download CV</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={img.src} alt="profile" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
      <div
        id="resume-content"
        style={{ display: `${hide ? "block" : "none"}` }}
      >
        <img src={resume.src} alt="Resume" />
      </div>
    </div>
  );
};

export default HeroSection;
