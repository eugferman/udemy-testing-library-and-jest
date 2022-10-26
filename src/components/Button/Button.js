import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonItem = styled.button`
  background-color: ${(props) => props.color};
`;

const Button = () => {
  const [colorButton, setColorButton] = useState('red');
  const newColorButton = colorButton === 'red' ? 'blue' : 'red';

  const handleChangeColor = () => {
    setColorButton(newColorButton);
  }
  return <ButtonItem onClick={handleChangeColor} color={colorButton}>Change to {newColorButton}</ButtonItem>
}

export default Button;
