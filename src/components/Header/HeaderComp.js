import React from "react";
import styled from "styled-components";
import Buttons from "../HomeScreen/Buttons"
import Logo1 from "../../images/app-logo.svg"

const HeaderComp =()=>{
    return(
        <Container>
            <Logo src={Logo1}></Logo>
            <NavHolder>
                <Nav>Overview</Nav>
                <Nav>Storefront</Nav>
                <Nav>Pricing</Nav>
                <Nav>Checkout Demo</Nav>
                <Nav>Developers</Nav>
            </NavHolder>
            <Buttonhold>
                <Sign>Sign in</Sign>
                <Buttons></Buttons>
            </Buttonhold>
        </Container>
    )
}






export default HeaderComp;

const Container = styled.div`
    // background-color: black;s
    height: 80px;
    width: 100%;
    // color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Logo = styled.img`
    // background-color: red;
    color : white;
    width: 100px;
    height: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

const NavHolder = styled.nav`
    // background-color: green;
    width: 570px;
    display: flex;
    justify-content: space-between;
`;

const Nav = styled.div`
 color: black;
 font-size: 20px;
`;

const Buttonhold = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Sign = styled.button`
    width: 70px;
    height: 28px;
    border: none;
    border-radius: 5px;
    color: #009FE4;
`;

// const Buttons = styled.button`

// `;