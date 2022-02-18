import React from 'react'
import styled from 'styled-components'


const Section6 = () => {
  return (
    <Container>
        <SectionHold>
            <Section6Img>
                <Background src={require("../../../images/connect@3x.png")}></Background>
            </Section6Img>
            <Section6Text>
                <Tools>We’re Here to
    Help You Get Started.
                </Tools>
                <Custormers>Connect with our Sales team for one-on-one
    assistance with getting started.</Custormers>
                <Button>Contact Us</Button>
                <Zone>We’ll call you within one business day, between 9 a.m. and
    5 p.m. in your time zone. If we can’t reach you, we’ll send an
    email with a phone number to call us back.</Zone>
            </Section6Text>
        </SectionHold>
    </Container>
  )
}

export default Section6;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5FBFE;

`;

const SectionHold = styled.div`
    width: 90%;
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;

const Section6Img = styled.div`
    width: 500px;
    display: flex;
    align-items: flex-end;
`;

const Background = styled.img`
    width: 450px
`;

const Tools = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #173C58;
    width: 338px;
    // background-color: red;
`;

const Custormers = styled.p`
    font-size: 17px;
    padding-bottom: 10px;
    opacity: 0.7;
`;

const Button = styled.button`
    height: 38px;
    width: 150px;
    border: none;
    border-radius: 5px;
    background-color: #009FE4;
    color: white;
    margin-bottom: 20px;
`;

const Section6Text = styled.div`
    width: 500px;
`;

const Zone = styled.div`

`;