import React from "react";
import styled, { css } from "styled-components/macro";
import Icon1 from "../images/reelmowing.png";
import Icon2 from "../images/sportsfieldpainting.jpeg";
import Icon3 from "../images/topdressingfield.jpeg";
import Icon4 from "../images/fertility.jpeg";
import Icon5 from "../images/baseballfield.jpeg";
import Icon6 from "../images/maintenance.png";
import { Button } from "../components/Button";

const ServicesContainer = styled.div`
  height: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;

  @media screen and (max-width: 1000px) {
    height: 1800px;
  }

  @media screen and (max-width: 768px) {
    height: 3250px;
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
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
  min-height: 480px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 480px;
  padding: 15px 15px 15px 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02) !important ;
    transition: all 0.2s ease-in-out !important;
    cursor: pointer;
  }
`;

const ServicesIcon = styled.img`
  height: 100%;
  width: 100%;
  /* border-radius: 15px; */
  max-height: 140px;
  margin-bottom: 10px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-height: 200px;
  }
`;

const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
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
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reel Mowing</ServicesH2>
          <ServicesP>
            We have a full line of reel mowing machines to handle multiple
            fields. Relieve yourself and your organization in handling the daily
            maintenance of reel mowing equipment and the costly lease program.
          </ServicesP>
          <Button
            primary="false"
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay="200"
            to="/reelmowing"
            data-aos-anchor-placement="top-bottom"
            padding="false"
            data-aos-once="true"
            css={`
              position: absolute;
              bottom: 0;
              max-width: 100px;
              margin-bottom: 1rem;
            `}
          >
            Learn More
          </Button>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <ServicesIcon src={Icon2} />
          <ServicesH2>Painting/Striping</ServicesH2>
          <ServicesP>
            Professional quality paint applications for all athletic events,
            including painting logos. Paint can be mixed with a growth regulator
            to allow lines to last much longer than conventional aerosol spray
            applications. Available for any sporting event and any sporting
            surface.
          </ServicesP>
          <Button
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-anchor-placement="top-bottom"
            to="/fieldmarking"
            padding="false"
            primary="false"
            data-aos-once="true"
            css={`
              position: absolute;
              bottom: 0;
              max-width: 10px;
              margin-bottom: 1rem;
            `}
          >
            Learn More
          </Button>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>Topdressing and Hollow Tine Aerification</ServicesH2>
          <ServicesP>
            We provide the highest quality topdressing and aerification
            programs. Our equipment provides the best results for high-use
            athletic fields. Topdressing applications use only a high-quality
            washed sand free of weed seed and other contaminants.
          </ServicesP>
          <Button
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay="200"
            to="/topdressing"
            padding="false"
            primary="false"
            data-aos-once="true"
            css={`
              position: absolute;
              bottom: 0;
              max-width: 10px;
              margin-bottom: 1rem;
            `}
          >
            Learn More
          </Button>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="400"
          data-aos-anchor-placement="top-bottom"
        >
          <ServicesIcon src={Icon4} />
          <ServicesH2>Fertility and Weed Control Programs</ServicesH2>
          <ServicesP>
            Customized Fertilizer applications can be developed with the use of
            a soil test to meet the specific needs of your situation. Weed
            control programs are designed to provide a weed-free field
            year-round. All applications are made by licensed applicators.
          </ServicesP>
          <Button
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay="200"
            to="/fertility"
            padding="false"
            primary="false"
            data-aos-once="true"
            css={`
              position: absolute;
              bottom: 0;
              max-width: 10px;
              margin-bottom: 1rem;
            `}
          >
            Learn More
          </Button>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="500"
          data-aos-anchor-placement="top-bottom"
        >
          <ServicesIcon src={Icon5} />
          <ServicesH2>Baseball Infield Renovations</ServicesH2>
          <ServicesP>
            Renovation services include loosening clay, topdressing new clay and
            conditioners, adding clay brick to mounds and batters' boxes, and
            cutting or leveling skinned infield edges. We exclusively use and
            sell Diamond Pro Products.
          </ServicesP>
          <Button
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay="200"
            to="/baseballfield"
            padding="false"
            primary="false"
            data-aos-once="true"
            css={`
              position: absolute;
              bottom: 0;
              max-width: 10px;
              margin-bottom: 1rem;
            `}
          >
            Learn More
          </Button>
        </ServicesCard>
        <ServicesCard
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="600"
          data-aos-anchor-placement="top-bottom"
        >
          <ServicesIcon src={Icon6} />
          <ServicesH2>Commercial Grounds Maintenance Programs</ServicesH2>
          <ServicesP>
            (Includes School Grounds) Cost-effective programs available to
            provide you with the professional service and consultation that you
            deserve. Our programs are tailored to fit your individual schedule
            and needs..
          </ServicesP>
          <Button
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-once="true"
            to="/commercialgrounds"
            padding="false"
            primary="false"
            css={`
              position: absolute;
              bottom: 0;
              max-width: 10px;
              margin-bottom: 1rem;
            `}
          >
            Learn More
          </Button>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
