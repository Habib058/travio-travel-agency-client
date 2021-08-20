import React from 'react';
import { useState } from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MenuButton from '../MenuButton/MenuButton';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <MenuButton isOpen={isOpen} toggle={toggle}></MenuButton>
            <Navbar toggle={toggle}/>
            <HeaderMain/>
        </div>
    );
};

export default Header;