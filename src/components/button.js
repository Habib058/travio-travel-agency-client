import styled from "styled-components";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
border-radius: 10px;
background: #0d6efd;
padding: 5px 22px;
color: #fff;
border:none;
outline: none;
cursor: pointer;
transition: all .2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all .2s ease-in-out;
    background: #fff;
    color: black;
}
`