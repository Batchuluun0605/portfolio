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
// import html2pdf from "html2pdf.js"; // Make sure to import html2pdf
import resume from "../../../public/resume.png";
const HeroSection = () => {
  const [hide, setHide] = useState(false);
  // const downloadPDF = async () => {
  //   if (typeof window === "undefined") return; // Ensure it only runs in the browser

  //   const html2Pdf = (await import("html2pdf.js")).default; // Dynamically import

  //   const filename = "resume.pdf";

  //   try {
  //     const element = document.getElementById("resume-content");
  //     if (!element) {
  //       console.error("Resume content not found");
  //       return;
  //     }

  //     const opt = {
  //       margin: 1,
  //       filename: filename,
  //       image: { type: "jpeg", quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: {
  //         unit: "in",
  //         format: "letter",
  //         orientation: "portrait",
  //       },
  //     };

  //     setHide(true);
  //     await html2Pdf().set(opt).from(element).save();
  //     setHide(false);
  //   } catch (error) {
  //     console.error("Error occurred while downloading PDF:", error);
  //   }
  // };

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
            <ResumeButton
              href={`https://www.canva.com/design/DAGRrQXXRNI/YC8HCoXOqbo4ugDibfnkNg/view?utm_content=DAGRrQXXRNI&utm_campaign=designshare&utm_medium=link&utm_source=editor`}
            >
              Check Resume
            </ResumeButton>
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
