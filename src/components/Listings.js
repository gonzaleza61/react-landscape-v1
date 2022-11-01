import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import ImageThree from "../images/maintenance.png";
import ImageFour from "../images/maintenanceright.png";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem calc((100vw - 1300px) / 2);


  @media screen and (max-width: 768px){
    display:none;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;
const Heading = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1rem;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;
  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

function Listings() {
  return (
    <Section>
      <Container>
        <Heading>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center-bottom"
          >
            Keep Your Field In <br/> Playing Condition!
          </h1>
        </Heading>
        <InfoRow>
          <InfoWrap
           data-aos="zoom-out-up"
           data-aos-duration="1200"
           data-aos-once="true"
           data-aos-anchor-placement="center-bottom"
          >
            <Image src={ImageThree} alt="img" />
            <h2>Athletic Field Construction</h2>
            <InfoLink to="/services">
              <p>Services</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
          <InfoWrap
          data-aos="zoom-out-down"
          data-aos-duration="1200"
          data-aos-once="true"
          data-aos-anchor-placement="center-bottom"
          >
            <Image
              src={ImageFour}
              alt="img"
              css={`
                margin-top: 120px;
                @media screen and (max-width: 768) {
                  margin-top: 0px;
                }
              `}
            />
            <h2>Natural Grass Construction
            </h2>
            <InfoLink to="/services">
              <p>Services</p>
              <Arrow />
            </InfoLink>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
}

export default Listings;
