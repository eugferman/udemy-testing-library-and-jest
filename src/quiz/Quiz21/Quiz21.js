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

  :hover {
    cursor: pointer;
  }
  :disabled{
    cursor: inherit;
  }
`;

const Quiz21 = () => {
  const [enableButton, setEnableButton] = useState(false);
  const textCheckbox = enableButton ? 'enable button' : 'disable button';
  const textButton = enableButton ? 'Disabled' : 'Enabled';

  return <>
  <ContainerQuiz>
    <TitleQuiz>Quiz 21</TitleQuiz>
      <label>
        <input data-testid="quiz21" type="checkbox"onClick={(e) => setEnableButton(e.target.checked)} />
        {textCheckbox}
      </label>
      <ActionButton disabled={enableButton} onClick={() => alert(`I'm ${textButton}`)}>
        {textButton}
      </ActionButton>
  </ContainerQuiz>
  </>
}

export default Quiz21;
