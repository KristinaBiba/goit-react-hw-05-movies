import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    padding: 24px;
    border-bottom: 3px solid darkgray;

    
`

export const StyledLink = styled(NavLink)`
    
    display: inline-block;
    width: 100px;
    height: 22px;
    padding: 8px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: lightgray;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;

    &.active {
        background-color: blue;
        color: white;
    }
`
export const Main = styled.main`    
    padding: 24px;`