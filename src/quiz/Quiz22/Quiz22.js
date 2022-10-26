import React, { useState } from 'react';
import styled from 'styled-components';

const ContainerQuiz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  padding: 50px;
  margin: 10px;

  label {
    font-size: 16px;
    color: black;
  }
`;

const TitleQuiz = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 20px 0;
`;

const ActionButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: ${(props) => props.backgroundColor};

  :hover {
    cursor: pointer;
  }
  :disabled{
    cursor: inherit;
    background-color: ${(props) => props.backgroundColor}
  }
`;

const Quiz22 = () => {
  const [enableButton, setEnableButton] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');
  const textCheckbox = enableButton ? 'enable button' : 'disable button';
  const textButton = enableButton ? 'Disabled' : 'Enabled';
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return <>
  <ContainerQuiz>
    <TitleQuiz>Quiz 22</TitleQuiz>
      <label>
        <input data-testid="quiz22" type="checkbox"onClick={(e) => setEnableButton(e.target.checked)} />
        {textCheckbox}
      </label>
      <ActionButton 
        backgroundColor={enableButton ? 'gray' : buttonColor} 
        disabled={enableButton} 
        onClick={() => setButtonColor(newButtonColor)}
      >
        {textButton}
      </ActionButton>
  </ContainerQuiz>
  </>
}

export default Quiz22;
