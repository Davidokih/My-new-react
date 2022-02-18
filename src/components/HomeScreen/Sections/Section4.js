import React from 'react'
import styled from 'styled-components'
import Icon1 from '../../../images/selling-icon.svg'
import Icon2 from '../../../images/fee-icon.svg'
import Icon3 from '../../../images/solutions-icon.svg'

const Section4 = () => {
  return (
    <Container>
            <Section4Text1>
                <Store>With Storefront You Now
    Have Everything You Need to
    Sell Online with ease</Store>
                <SetUp>Set up a fully-hosted online store in just minutes. The online
    store was designed with you in mind, meaning you don't need
    to hire any web designers or programmers to get started.
    <List>Let’s get you started</List>
    </SetUp>
            </Section4Text1>
            <Background src={require("../../../images/storefront@3x (2).png")}></Background>
            <Section4Text2>
                <Chart>
                    <Icon src={Icon1}></Icon>
                    <Sell>Start Selling Online</Sell>
                    <Custormers>Easily sell online and ship orders to
    customers, offer in-shop pickup, or local
    delivery—no matter what type of business
    you have.</Custormers>
                </Chart>
                <Chart>
                    <Icon src={Icon2}></Icon>
                    <Sell>Ease Of Delivery</Sell>
                    <Custormers>We give you the flexibility of handling your
own package delivery as well as provide
the option to intergate with our dedicated
logistics partners.</Custormers>
                </Chart>
                <Chart>
                    <Icon src={Icon3}></Icon>
                    <Sell>Built-In Payment Solutions</Sell>
                    <Custormers>As with all of our tools, payments are central
to the experience. Even with online payments,
you benefit from our lower rates and fast
deposits.</Custormers>
                </Chart>
            </Section4Text2>
    </Container>
  )
}

export default Section4;

const Container = styled.div`
    width: 100%;
    background-color: #F5FBFE;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section4Text1 = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Store = styled.h1`
    color: #173C58;
    width: 500px;
    font-size: 40px;
    font-weight: 400;
`;

const SetUp = styled.div`
    width: 400px;
`;

const List = styled.div`
    text-decoration: underline;
    padding-top: 20px;
`;

const Background = styled.img`
    width: 1210px;
`;

const Section4Text2 = styled.div`
    width: 90%;
    margin-top: 30px;
    display: flex;;
    align-items: center;
    justify-content: space-between;
`;

const Chart = styled.div`
    width: 300px;
   
`;

const Icon = styled.img`
    // width: 69px;
`;

const Sell = styled.h2`
    font-size: 20px;
    font-weight: 500;
`;

const Custormers = styled.div`

`;