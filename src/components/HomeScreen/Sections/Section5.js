import React from 'react'
import styled from 'styled-components'
import Icon1 from '../../../images/icon-qr-code.svg'
import Icon2 from '../../../images/icon-cash.svg'
import Icon3 from '../../../images/icon-ussd.svg'
import Icon4 from '../../../images/icon-cards.svg'
import Icon5 from '../../../images/icon-transfer.svg'

const Section5 = () => {
  return (
    <Container>
    <SectionHold>
        
        <Section2Text>
            <Channels>POINT OF SALE TERMINAL</Channels>
            <Tools>One Card Reader for
All Your Payment Needs
            </Tools>
            <Custormers>Introducing the one device for all your payment needs.
Whether you're accepting payments at your countertop
checkout or looking to accept payments on-the-go, the
lightweight and easy to transport Card Reader connects to an
array of devices and offers your business the flexibility to accept
any type of payment, wherever you are.</Custormers>
            <Table>
                <Icon src={Icon1}></Icon>
                <Icon src={Icon2}></Icon>
                <Icon src={Icon3}></Icon>
                <Icon src={Icon4}></Icon>
                <Icon src={Icon5}></Icon>
            </Table>
        </Section2Text>
        <Section2Img>
            <Background src={require("../../../images/pos@3x.png")}></Background>
        </Section2Img>
    </SectionHold>
</Container>
  )
}

export default Section5;

const Container = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    // background-color: #F5FBFE;
`;

const SectionHold = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

const Section2Img = styled.div`
    width: 700px;
    height: 600px;
    // background-color: red;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Background = styled.img`
    width: 600px;
    position: relative;
    bottom: 50px;
    left: 50px;
`;

const Section2Text = styled.div`
    width: 480px;
    margin-top: 40px;
`;

const Tools = styled.h1`
    font-size: 40px;
    font-weight: 400;
    color: #003C58;
    width: 410px;
`;

const Custormers = styled.div`
    margin-bottom: 20px;
`;

const Channels = styled.div`

`;

const Table = styled.div`
    width: 450px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Icon = styled.img`

`;