import React, {Component} from "react";
import "./app-header.css";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    h2 {
        font-size: 1.2rem;
        color: grey;063
    }
`;

export function AppHeader({liked, allPosts}) {
    return (
        <Header>
            <h1>Alexander Kovalskyi</h1>
            <div>{allPosts} записей, из них понравилось {liked}</div>
        </Header>
    )
}