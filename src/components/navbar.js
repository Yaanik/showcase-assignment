import React from 'react';
import styled from 'styled-components';
import {Container} from '../globalStyles';
import LogoIcon from '../graphics/logoIcon';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: sticky;
  z-index: 999;
`

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
`

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  flex-flow: row nowrap;
  *:not(:last-child) {
    margin-right: 40px;
  }
`

const NavbarItem = styled.li`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  cursor: pointer;
`

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <LogoContainer>
                    <LogoIcon />
                </LogoContainer>
                <NavbarMenu>
                    <NavbarItem>
                        World
                    </NavbarItem>
                    <NavbarItem>
                        World
                    </NavbarItem>
                    <NavbarItem>
                        World
                    </NavbarItem>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;
