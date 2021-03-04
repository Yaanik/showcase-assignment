import React from 'react';
import styled from 'styled-components';
import {
    Container,
    H2,
    SubText
} from '../globalStyles';
import FeatureGraphics from '../graphics/featuresGraphics';

const FeaturesContainer = styled(Container)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 0;
`

const StyledH2 = styled(H2)`
  
  mark {
    background: transparent;
    border-bottom: 100px;
    border-left: 75px;
    border-right: 64px;
    height: 0;
    width: 218px;
  }
`


const Illustration = styled(FeatureGraphics)`
  height: 100%;
  width: 100%;
  align-self: center;
`

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FeaturesOne = () => {

    return(
        <FeaturesContainer>
            <StyledH2>See <mark>Superr</mark> in action</StyledH2>
            <SubText style={{marginBottom: '60px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis tortor urna, venenatis cursus est ultricies, ultrices sagittis tortor.
                Suspendisse tempor lobortis ligula, congue pretium velit sodales a.
            </SubText>
            <IllustrationContainer>
                <Illustration />
            </IllustrationContainer>
        </FeaturesContainer>
    )
};

export default FeaturesOne;