import React from "react";
import styled from "styled-components";
import ImageTwo from "../images/featuresimg.jpg";
import { Button } from "./Button";

const Section = styled.section`
  background: #000d1a;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 130%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
            data-aos='fade-right'
            data-aos-duration='1200'
            data-aos-delay='300'
            data-aos-once='true'
            data-aos-anchor-placement='top-bottom'
            >
              <h1>The Authority In Texas Sports Fields</h1>
              <p>High temperatures and humidity levels make Texas a unique landscape for athletic field design and sports field construction. We are proud to provide our neighbors in the Lone Star State the homegrown knowledge and experience required to ensure surface consistency for exceptional play-ability.

</p>
              <p>From small specialty services to large turnkey projects, Philip's Athletic Field Maintenance provides unparalleled service and commitment for your needs. We are dedicated to exceeding your sports construction expectations to provide a unique and lasting impression on those who see your field.</p>
              <Button to="/contact">Learn More</Button>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image src={ImageTwo}
            data-aos='fade-left'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-anchor-placement='top-bottom'
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
