import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';
import {Container} from '../globalStyles';
import Line from '../graphics/line';
import FeaturesOne from '../components/featuresOne';
import FeaturesTwo from '../components/featuresTwo';
import Contact from '../components/contact';
import Footer from '../components/footer';

const HomeContainer = styled(Container)`
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
`

const Home = () => {

    return (
        <>
            <HomeContainer>
                <Hero />
                <FeaturesOne />
                <Line/>
                <FeaturesTwo />
                <Line />
                <Contact />
            </HomeContainer>
            <Footer />
        </>
);
};

export default Home;
