import styled from "styled-components";

import { Link } from "react-router-dom";

export const Ul = styled.ul`

    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 40 0 0 0;
    padding: 0;
`
export const Li = styled.li`

    width: 350px;
    height: 40px; 
    border-radius: 4px;
    background-color: lightgray;

    list-style: none;
`
export const LinkStyled = styled(Link)`
    display: block;
    width: 350px;
    height: 22px;
    padding: 8px;
    color: black;
    text-decoration: none;
`       


    