import React from 'react';
import styled from 'styled-components';
import {Container} from '../globalStyles';
import {colors} from '../utils/colors';
import LogoIcon from '../graphics/logoIcon';

const FooterContainer = styled(Container)`
  max-width: 100vw;
  //width: 100vw;
  margin: auto;
  overflow: hidden;
  position: relative;
  background: ${colors.main};
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: ${colors.white};
`

const PaddingContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const ContactInfo = styled.div`
  font-family: Open Sans,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;

  *:not(:last-child){
    margin-bottom: 10px;
  }
  p{
    margin: 0
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  *:not(:last-child) {
    margin-right: 50px;
  }
`

const LinkRow = styled.div`
  display: flex;
  flex-direction: column;
  *:not(:last-child){
    margin-bottom: 10px;
  }
  h5 {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;
    margin: 0;
  }
  p {
    margin: 0;
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }
`

const LogoContainer = styled.div`
    color: ${colors.white}
`

const Footer = () => {
    return (
        <FooterContainer>
            <PaddingContainer>
                <ContactInfo>
                    <LogoContainer>
                        <LogoIcon white/>
                    </LogoContainer>
                    <p>hello@superr.com</p>
                    <p>+358 40 1234567</p>
                    <p>Illustrations By Pablo Stanley </p>
                </ContactInfo>
                <LinksContainer>
                    <LinkRow>
                        <h5>
                            PRODUCT
                        </h5>
                        <p>Features</p>
                        <p>Pricing</p>
                    </LinkRow>
                    <LinkRow>
                        <h5>
                            COMPANY
                        </h5>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Legal</p>
                    </LinkRow>
                    <LinkRow>
                        <h5>
                            COMMUNITY
                        </h5>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                    </LinkRow>
                </LinksContainer>
            </PaddingContainer>
        </FooterContainer>
    );
};

export default Footer;
