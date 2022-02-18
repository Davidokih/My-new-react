import React from 'react'
import styled from 'styled-components';

const Section2 = () => {
  return (
    <Container>
        <div>WHY USE QUICKTELLER BUSINESS</div>
        <H1>We Use a Technology-First Approach
to Payments and Finance</H1>
    <SectionHold>
        
        <Section2Text>
            <Channels>MULTIPLE PAYMENT CHANNELS</Channels>
            <Tools>Get Paid Securely,
How and When You Want
            </Tools>
            <Custormers>As with all of our tools, payments are central to the experience.
Even with online payments, you benefit from our lower rates
and fast deposits. Quickteller business seamlessly integrates
with your existing website or store and we provide various
payment options.</Custormers>
            <Table>
                <div>Cards</div>
                <div>USSD</div>
                <div>Bank Transfer</div>
            </Table>
            <Table>
                <div>QR</div>
                <div>Paycode</div>
                <div>Mobile Money </div>
            </Table>
        </Section2Text>
        <Section2Img>
            <Background src={require("../../../images/seamless-integration@3x.png")}></Background>
        </Section2Img>
    </SectionHold>
    </Container>
  )
}

export default Section2;

const Container = styled.div`
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    background-color: #F5FBFE;
`;

const H1 = styled.h1`
    margin-top: 40px;
    width: 600px;
    text-align: center;
    color: #003C58;
`;

const SectionHold = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

const Section2Img = styled.div`
    width: 800px;
    margin-left: 20px;
    margin-top: 40px;
    display: flex;
    // background-color: red;
    // align-items: flex-end;
    justify-content: flex-end;
`;

const Background = styled.img`
    width: 600px;
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