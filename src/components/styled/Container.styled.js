import styled from "styled-components";

export const Container = styled.div`
    --Soft-orange: hsl(35, 77%, 62%);
    --Soft-red: hsl(5, 85%, 63%);
    --Off-white: hsl(36, 100%, 99%);
    --Grayish-blue: hsl(233, 8%, 79%);
    --Dark-grayish-blue: hsl(236, 13%, 42%);
    --Very-dark-blue: hsl(240, 100%, 5%);
    font-size: 15px;
    --Maintitle-fontsize: 3.7em;
    --Bignumber-fontsize: 2.1em;
    --Newitem-fontsize: 2.7em;
    --Subnewitem-fontsize: 1.25em;
    --Trendingitem-fontsize: 1.2em;
    --Button-fontsize: 1.05em;
    --Nav-description-fontsize: 1.04em;
    --Maintitle-color: hsl(240, 100%, 5%);;
    --Bignumber-color: hsl(233, 8%, 79%);
    --Newitem-color: hsl(35, 77%, 62%);
    --Subnewitem-color: hsl(36, 100%, 99%);
    --Trendingitem-color: hsl(240, 100%, 5%);
    --Button-color: hsl(36, 100%, 99%);
    --Nav-description-color: hsl(236, 13%, 42%);
    --ultrabold: 800;
    --bold: 700;
    --reguler: 400;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width:100wh;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: var(--Off-white);
    h1{
        font-size: var(--Maintitle-fontsize);
        font-weight: var(--ultrabold);
        color:var(--Maintitle-color);
        margin: 0;
        @media screen and (max-width:1025px) {
            font-size: 2.5em;
        }
        @media screen and (max-width:600px) {
            font-size: 3em;
            line-height: 1.1em;
        }
    }
    h2{
        font-size: var(--Bignumber-fontsize);
        font-weight: var(--bold);
        color:var(--Bignumber-color);
        margin: 0 0 13px 0;
        @media screen and (max-width:1025px) {
            margin: 8px 0;
        }
        @media screen and (max-width:600px) {
            margin: 0 0 5px 0;
        }
    }
    h3{
        font-size: var(--Newitem-fontsize);
        font-weight: var(--bold);
        color:var(--Newitem-color);
        margin: 0 0 25px 0;
        @media screen and (max-width:1025px) {
            font-size: 1.6em;
            margin: 0 0 10px 0;
        }
        @media screen and (max-width:600px) {
            font-size: 2em;
            margin: 0 0 20px 0;
        }
    }
    h4{
        font-size: var(--Subnewitem-fontsize);
        font-weight: var(--ultrabold);
        color:var(--Subnewitem-color);
        margin: 0 0 12px 0;
        cursor: pointer;
        &:hover{
            color: var(--Soft-orange);
        }
        &:active{
            color: var(--Soft-red);
        }
        @media screen and (max-width:1025px) {
            font-size: 1em;
        }
        @media screen and (max-width:600px) {
            font-size: 1.2em;
            margin: 0 0 8px 0;
        }
    }
    h5{
        font-size: var(--Trendingitem-fontsize);
        font-weight: var(--ultrabold);
        color:var(--Trendingitem-color);
        margin: 0 0 13px 0;
        cursor: pointer;
        &:hover{
            color: var(--Soft-red);
        }
        &:active{
            color: var(--Soft-orange);
        }
        @media screen and (max-width:600px) {
            margin: 0 0 8px 0;
        }
    }
    h6{
        font-size: var(--Button-fontsize);
        font-weight: var(--bold);
        color:var(--Button-color);
        letter-spacing: .3em;
        margin: 0;
        @media screen and (max-width:600px) {
            font-size: 1.1em;
        }
    }
    p{
        font-size: 1.02em;
        font-weight: var(--reguler);
        color:var(--Nav-description-color);
        margin: 0;
        @media screen and (max-width:1025px) {
            font-size: .9em;
        }
        @media screen and (max-width:600px) {
            font-size: 1.02em;
            line-height: 1.7em;
            letter-spacing: .03em;
        }
    }
    ul{
        font-size: var(--Nav-description-fontsize);
        font-weight: var(--reguler);
        color:var(--Dark-grayish-blue);
        padding:5px 0;
        margin: 0;
        list-style: none;
        @media screen and (max-width:600px) {
            display: none;
        }
    }
    li{
        display: inline;
        margin-left:37px;
        cursor:pointer;
        &:hover{
            color: var(--Soft-red);
        }
        &:active{
            color: var(--Soft-orange);
        }
        @media screen and (max-width:600px) {
            display: list-item;
        }
    }
`