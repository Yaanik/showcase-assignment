import React from 'react';
import styled from 'styled-components';
import {
    Container,
    H2,
    SubText
} from '../globalStyles';
import {colors} from '../utils/colors';
import Button from './button';

const ContactContainer = styled(Container)`
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 120px;
`

const InputContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 55%;
`
const Input = styled.input`
  //padding: 10px;
  color: #777;
  padding-left: 15px;
  background: ${colors.white};
  border-radius: 5px;
  height: 45px;
  width: 350px;
  font-size: 18px;
  border: 1px ${colors.dark} solid;
`

const Contact = () => {
    return (
        <ContactContainer>
            <H2>Stay in touch</H2>
            <SubText style={{margin: '0 0 50px 0 '}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor urna, venenatis cursus est ultricies, ultrices sagittis tortor.</SubText>
            <InputContainer>
                <Input defaultValue="name@domain.com" />
                <Button>Subscribe to newsletter</Button>
            </InputContainer>
        </ContactContainer>
    );
};

export default Contact;
