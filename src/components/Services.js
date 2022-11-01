import React from "react";
import styled, { css } from "styled-components/macro";
import Icon1 from "../images/reelmowing.png";
import Icon2 from "../images/ImageTwo.jpg";
import Icon3 from "../images/topdressingfield.jpeg";
import Icon4 from "../images/fertility.jpeg";
import Icon5 from "../images/baseballfield.jpeg";
import Icon6 from "../images/maintenance.png";


const ServicesContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1800px;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1850px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const ServicesCard = styled.div`
  min-height: 290px;
  background-size: cover;
  background-image: url(${Icon1});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 290px;
  padding: 15px 15px 15px 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;


  &:before {
        background: rgba(0, 0, 0, 0.6);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`;

const ServicesH1 = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesWrapper>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
          css={`
          background-image: url(${Icon1});
          `}
        >
            <ServicesH1>REEL MOWING</ServicesH1>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
          css={`
          background-image: url(${Icon2});
          `}
        >
          <ServicesH1>PAINTING/STRIPING</ServicesH1>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
          css={`
          background-image: url(${Icon3});
          `}
        >
          <ServicesH1>TOPDRESSING</ServicesH1>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
          css={`
          background-image: url(${Icon4});
          `}
        >
          <ServicesH1>FERTILITY AND WEED CONTROL</ServicesH1>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
          css={`
          background-image: url(${Icon5});
          `}
        >
          <ServicesH1>BASEBALL FIELD RENOVATIONS</ServicesH1>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="600"
          data-aos-anchor-placement="top-bottom"
          css={`
          background-image: url(${Icon6});
          `}
        >
          <ServicesH1>COMMERICIAL GROUNDS MAINTENANCE PROGRAMS</ServicesH1>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;