import React from 'react'
import styled from 'styled-components'


const Logos = () => {
  return (
    <Container>
        <Brands>TRUSTED BY BRANDS YOU TRUST</Brands>
        <LogoHold>
            <Multi src={require("../../../images/multi-choice.png")}></Multi>
            <Oando src={require("../../../images/oando.png")}></Oando>
            <Dominos src={(require("../../../images/dominos.png"))}></Dominos>
            <Konga src={require("../../../images/konga.png")}></Konga>
            <Star src={require("../../../images/betking.png")}></Star>
        </LogoHold>
    </Container>
  )
}

export default Logos;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
`;

const Brands = styled.div`

`;

const LogoHold = styled.div`
    width: 700px;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
`;

const Multi = styled.img`
    width: 50px;
    height: 28px;
`;

const Oando = styled.img`
    width: 50px;
    height: 28px;

`;

const Dominos = styled.img`
    width: 50px;
    height: 28px;

`;

const Konga = styled.img`
    height: 28px;
    width: 50px;

`;

const Star = styled.img`
    width: 40px;
    height: 28px;


`;