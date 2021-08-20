import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../../../button';

const MenuButton = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/'>Home</SidebarLink>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='destination'>Destinations</SidebarLink>
                    <SidebarLink to='tours'>Tours</SidebarLink>
                    <SidebarLink to='blog'>Blog</SidebarLink>
                    <SidebarLink to='admin'>Admin</SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarLink><Button>Login</Button></SidebarLink>
                </SidebarBtn>
            </SidebarWrapper>

        </SidebarContainer>
    );
};

export default MenuButton;
const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`
const CloseIcon = styled(FaTimes)`
color: #fff;
`
const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
const SidebarWrapper = styled.div`
color:#fff
`
const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align:center;
@media screen and (max-width:480px){
    grid-template-rows: repeat(6,60px);
}
`
const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover{
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`
const SidebarBtn = styled.div`
display: flex;
justify-content: center;
`