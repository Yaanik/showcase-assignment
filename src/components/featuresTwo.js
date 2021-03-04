import React from 'react';
import styled from 'styled-components';
import {
    Container,
    H2,
    SubText
} from '../globalStyles';
import HeroGraphics from '../graphics/heroGraphics';
import FeatureGraphics from '../graphics/featuresGraphics';
import {colors} from '../utils/colors';

const FeaturesContainer = styled(Container)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 0;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: absolute;
    z-index: -1;
    margin-left: 36rem;
    height: 50px;
    width: 210px;
    background: ${colors.main};
    transform: skew(-15deg) rotate(-2deg);
  }
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

const FeatureContainer = styled.div`

  p {
    margin: 0;
    font-family: Open Sans, sans-serif;
    font-size: 18px;
    line-height: 25px;
    color: ${colors.darkLight}
  }

  h3 {
    margin: 0 0 15px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
  }

  .tag {
    margin: 0 0 5px;
    font-family: Open Sans, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    color: ${colors.main};
  }

`

const FeatureGridContainer = styled.div`
  text-align: start;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
`

const Feature = ({tag, title, text}) => {

    return(
        <FeatureContainer>
            <p className='tag'>{tag}</p>
            <h3>{title}</h3>
            <p className='text'>{text}</p>
        </FeatureContainer>
    )
}

const Features = () => {
    const features = [
        {
            tag: 'Lorem ipsum dolor',
            title: 'Lorem ipsum dolor sit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, venenatis cursus est ultricies, ultrices sagittis tortor. Suspendisse tempor lobortis ligula, congue pretium velit sodales a. '
        },
        {
            tag: 'Suspendisse',
            title: 'Pretium velit',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, venenatis cursus est ultricies, ultrices sagittis tortor. Suspendisse tempor lobortis ligula, congue pretium velit sodales a. '
        },
        {
            tag: 'pretium velit sodales',
            title: 'Ultrices sagittis tortor',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, venenatis cursus est ultricies, ultrices sagittis tortor. Suspendisse tempor lobortis ligula, congue pretium velit sodales a. '
        },
        {
            tag: 'cursus est ultricies',
            title: 'Consectetur adipiscing',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, venenatis cursus est ultricies, ultrices sagittis tortor. Suspendisse tempor lobortis ligula, congue pretium velit sodales a. '
        },
    ]

    return(
        <FeatureGridContainer>
            {features.map((f) => (
                <Feature tag={f.tag} title={f.title} text={f.text} />
            ))}
        </FeatureGridContainer>
    )
}


const FeaturesTwo = () => {

    return(
        <FeaturesContainer>
            <HeaderContainer>
                <StyledH2>
                    Here’s what makes us special
                </StyledH2>
                <div/>
            </HeaderContainer>
            <SubText style={{marginBottom: '120px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis tortor urna, venenatis cursus est ultricies, ultrices sagittis tortor.
                Suspendisse tempor lobortis ligula, congue pretium velit sodales a.
            </SubText>
            <Features/>
        </FeaturesContainer>
    )
};

export default FeaturesTwo;