import React from 'react'
import styled from 'styled-components';
import Buttons from '../Buttons'
import Image from '../../../images/dashboard@3x.png'
import Image2 from '../../../images/webpay-mobile@3x.png'
import Image3 from '../../../images/terminal-mobile@3x.png'

export const Section1 = () => {
  return (
    <Container>
        <Section1Text>
            <Tools>All the Tools You Need
                    to Grow Your Business,
                    In One Place.
            </Tools>
            <Custormers>Our suite of integrated tools saves you time, so you can
focus on growing revenue and delivering exceptional
service to your customers.</Custormers>
            <Button>Get Started</Button>
        </Section1Text>
        <Section1Img>
            <Background>
                <Background2 src={Image2}></Background2>
                <Background3 src={Image3}></Background3>
            </Background>
        </Section1Img>
    </Container>
  )
}


export default Section1;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Section1Text = styled.div`
    width: 450px;
    // background-color: red;
    margin-left: 90px;
`;

const Tools = styled.h1`
    font-size: 40px;
    font-weight: 400;
`;

const Custormers = styled.p`
    font-size: 17px;
    padding-bottom: 10px;
    opacity: 0.7;
`;

const Button = styled.button`
    height: 38px;
    width: 175px;
    border: none;
    border-radius: 5px;
    background-color: #009FE4;
    color: white;
`;

const Section1Img = styled.div`
    // height: 700px;
    // background-color: red;
    width: 850px;
`;

const Background = styled.div`
    background-image: url(${Image});
    width: 850px;
    height: 500px;
    background-repeat: no-repeat;
    background-size: 700px;
    background-position-y: 50px;
    background-position-x: 105px;
`;

const Background2 = styled.img`
    width: 200px;
    height: 350px;
    position: relative;
    left: 480px;
    top: 100px;
`;

const Background3 = styled.img`
    width: 200px;
    height: 400px;
    position: relative;
    left: 450px;
    bottom: -100px;
`;