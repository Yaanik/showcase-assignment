import React from 'react';
import styled from 'styled-components';
import {colors} from '../utils/colors';

const ButtonContainer = styled.button`
  background: ${colors.main};
  color: ${colors.white};
  cursor: pointer;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 10px 35px 10px 35px;
  border: 0;
  border-radius: 5px;
  font-family: Poppins,sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`


const Button = ({children}) => {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    );
};

export default Button;
