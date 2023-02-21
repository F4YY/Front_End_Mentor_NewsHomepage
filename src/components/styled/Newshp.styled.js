import styled from "styled-components";
import imagedesktop from '../assets/images/image-web-3-desktop.jpg';
import imagemobile from '../assets/images/image-web-3-mobile.jpg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:1025px) and (max-width:600px) {
        flex-direction: column;
    }
`
export const StyledNewshomepage = styled(Vstack)`
    width: 1110px;
    height: 980px;
    @media screen and (max-width:1025px) {
        width: 90%;
        height: auto;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        margin: 0 20px;
    }
`
//Styled for navbar section:
export const Navbarsection = styled(Hstack)`
    padding: 90px 0 50px;
    margin-right: 0;
    justify-content: space-between;
    background-color: var(--Off-white);
    @media screen and (max-width:1025px) {
        padding: 40px 0 20px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        margin: 0;
    }
`
export const Logo = styled.img`
    width: 64px;
    height: 40px;
    @media screen and (max-width:600px) {
        width: 15%;
        height: 15%;
    }
`
//Styled for hero section:
export const Herosection = styled(Hstackflexi)`
    margin-bottom:40px;
    @media screen and (max-width:1025px) {
        margin-bottom:0;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        margin: 0;
    }
`
export const Heromainsec = styled(Vstack)`
    width: 750px;
    height: 510px;
    margin:0;
    background-color: var(--Off-white);
    @media screen and (max-width:1025px) {
        width: auto;
        height: auto;
    }
`
export const Heromaintopsection = styled.div`
    width: 735px;
    height: 300px;
    @media screen and (max-width:1025px) {
        width: 100%;
        height: 200px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        min-height: 350px;
    }
`
export const Heroimage = styled(Heromaintopsection)`
    background-image:url(${imagedesktop});
    background-size: cover;
    background-color: green;
    @media screen and (max-width:600px) {
        background-image:url(${imagemobile});
    }
`
export const Heromainbottomleftsec = styled.div`
    width: 375px;
    height:210px;
    margin: 32px 0;
    line-height: 3.8em;
    @media screen and (max-width:1025px) {
        width: 100%;
        height: auto;
        margin: 22px 0;
    }
    @media screen and (max-width:600px) {
        width: auto;
    }
`
export const Heromainbottomrightsec = styled(Vstack)`
    width: 375px;
    height:210px;
    margin: 32px 20px 0 30px;
    line-height: 1.5em;
    @media screen and (max-width:1025px) {
        width: 100%;
    }
    @media screen and (max-width:600px) {
        width: auto;
        margin: 0 0 30px;
    }
`
export const Herobutton = styled.button`
    width: 188px;
    height: 48px;
    margin: 35px 0;
    text-transform:uppercase;
    border-style: none;
    cursor:pointer;
    background-color: var(--Soft-red);
    &:hover{
        background-color: var(--Very-dark-blue);
    }
    &:active{
        background-color: var(--Dark-grayish-blue);
    }
    @media screen and (max-width:1025px) {
        width: 80%;
        height: 20%;
        margin: 30px 0 0 0;
    }
    @media screen and (max-width:600px) {
        width: 55%;
        height: 25%;
        margin: 25px 0;
    }
`
export const Herosidesection = styled(Vstack)`
    height: 445px;
    padding: 30px 25px;
    margin-left: 10px;
    background-color: var(--Very-dark-blue);
    @media screen and (max-width:1025px) {
        height: 85%;
        padding: 20px 20px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        height: auto;
        margin: 0;
    }
`
export const Stylednewitems = styled(Vstack)`
    padding-bottom: 35px;
    margin-bottom: 35px;
    p{
        color:var(--Grayish-blue);
    }
    &:not(:last-child){
        border-bottom:1px solid var(--Dark-grayish-blue);
    }
    @media screen and (max-width:1025px) {
        padding-bottom: 10px;
        margin-bottom: 10px;
        p{
            font-size: .8em;
        }
    }
    @media screen and (max-width:600px) {
        &:not(:last-child){
            padding-bottom: 25px;
            margin-bottom: 25px;
        }
        p{
            font-size: 1em;
        }
    }
`
//Styled for bottom section:
export const Bottomsection = styled(Hstackflexi)`
    margin-top: 27px;
    @media screen and (max-width:1025px) {
        margin: 20px 0;
    }
    @media screen and (max-width:600px) {
        width: auto;
        margin: 50px 0;
    }
`
export const Styledtrendingitems = styled(Hstackflexi)`
    width: 500px;
    height:auto;
    p{
        font-size: 1.01em;
        line-height: 1.4em;
    }
    &:not(:first-child){
        margin-left: 30px;
    }
    @media screen and (max-width:1025px) {
        flex-direction: column;
        width: auto;
    }
    @media screen and (max-width:600px) {
        width: auto;
        flex-direction: row;
        margin: 10px 0;
        &:not(:first-child){
            margin-left: 0;
        }
        p{
            line-height: 1.3em;
        }
    }
`
export const Trendingimage = styled.img`
    width: 100px;
    height: 127px;
    margin-right: 23px;
    @media screen and (max-width:600px) {
        margin-right: 15px;
    }
`
//Styled for mobile menu icon:
export const Menuicon = styled.img`
    width: 40px;
    height: 23px;
    display: none;
    margin-top: 8px;
    cursor: pointer;
    @media screen and (max-width:600px){
        display:flex;
    }
`
export const Overlayscreen = styled.div`
    position:fixed;
    flex-direction: column;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    opacity:.5;
    background:var(--Very-dark-blue);
`
export const Menulist = styled(Vstack)`
    position: fixed;
    flex-direction: column;
    top:0;
    right:0;
    width: 70%;
    height: 100vh;
    transition: .5s ease-in-out;
    background:var(--Off-white);
    @media screen and (max-width:600px) {
        ul{
            display: block;
            font-size: 1.45em;
            font-weight: var(--reguler);
            color:var(--Very-dark-blue);
            margin-top: 160px;
        }
        li{
            display: list-item;
            margin: 0 0 30px 30px ;
        }
    }
`
export const Closeicon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top:43px;
    right:25px;
`
//Styled for attribution:
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 0;
    font-size: .8em;
    text-align: center;
    cursor:none;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px 20px 5px;
    }
`
export const AttributionA = styled(Attribution)`
    h4{
        color: hsl(228, 45%, 44%);
    }
`