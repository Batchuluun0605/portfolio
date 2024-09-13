import React from "react";

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
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import img from "../../../public/zurag.jpg";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "../HeroBgAnimation";
import { Bio } from "@/data/constants";

const HeroSection = () => {
  const downloadImage = () => {
    saveAs("https://www.imghippo.com/i/uQTTw1726208581.png", "image.jpg"); // Put your image URL here.
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
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={img.src} alt="profile" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
