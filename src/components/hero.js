import React from 'react';
import styled from 'styled-components';
import Button from './button';
import HeroGraphics from '../graphics/heroGraphics';
import {
    Container,
    H1,
    H2
} from '../globalStyles';
import {colors} from '../utils/colors';
import Arrow from '../graphics/arrow';

const HeroContainer = styled(Container)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Illustration = styled(HeroGraphics)`
  height: 100%;
  width: 100%;
`

const IllustrationContainer = styled.div`
  display: flex;
  position: absolute;
  right: -120px;
  overflow: hidden;
`

const LeftSection = styled(Container)`
  padding: 200px 0;
  flex-flow: column wrap;
`

const StyledH1 = styled(H1)`
  max-width: 55%;
  margin: 0 0 30px;

`

const HeroText = styled.p`
  width: 47%;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  margin: 0 0 50px;
`



const Hero = () => {

    return(
        <HeroContainer>
            <LeftSection>
                <StyledH1>
                    Bring <mark> productivity </mark>
                    to your mornings
                </StyledH1>
                <HeroText>
                    Get your daily fix of creativity and positivity to kickstart your mornings.
                    Proin blandit turpis elit, sed pretium dui ullamcorper ut.
                    In vel turpis luctus augue viverra feugiat. Praesent mauris nulla, scelerisque ac lacus non.
                </HeroText>
                <Button>
                    Start using Superr
                </Button>
            </LeftSection>
            <IllustrationContainer>
                <Illustration />
            </IllustrationContainer>
            <Arrow />
        </HeroContainer>
    )
};

export default Hero;