import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 24px 0 0 0;
    padding: 0;
`

export const Img = styled.img`
    width: 40%;
`
export const Div = styled.div`
    width: 40%;

`
export const LinkBackStyled = styled(NavLink)`
    display: inline-block;
    width: 150px;
    height: 22px;
    padding: 8px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: lightgray;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
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


    