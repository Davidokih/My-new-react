import React from 'react'

import styled from 'styled-components'

const Buttons = () => {
  return (
    <Button>Get started</Button>
  )
}

export default Buttons;

const Button = styled.button`
    height: 38px;
    width: 125px;
    border: none;
    border-radius: 5px;
    background-color: #009FE4;
    color: white;
`;
