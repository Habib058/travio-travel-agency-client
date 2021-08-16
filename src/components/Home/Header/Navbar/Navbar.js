import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa'
import { Button } from '../../../button';
import logo from '../../../../assets/images/logo.png'

const Navbar = () => {
    return (
        <Nav>
            <NavLink to='/'><img style={{height:'40px'}} src={logo} alt="" /></NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to='about'>About</NavLink>
                <NavLink to='destination'>Destinations</NavLink>
                <NavLink to='tours'>Tours</NavLink>
                <NavLink to='blog'>Blog</NavLink>
                <NavLink to='admin'>Admin</NavLink>
                
            </NavMenu>
            <NavBtn><Button>Login</Button></NavBtn>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem;
z-index: 100;
position: relative;
`
const NavLink= styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
font-size: 20px;
cursor: pointer;

`
const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width:768px){
    display: none;
}

`
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width:768px){
    display: none;
}
`

