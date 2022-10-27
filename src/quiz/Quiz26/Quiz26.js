import React, { useState } from "react";
import styled from "styled-components";

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
  :disabled {
    cursor: inherit;
    background-color: ${(props) => props.backgroundColor};
  }
`;

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z]\B)/g, " $1");
}

const Quiz26 = () => {
  // const [enableButton, setEnableButton] = useState(false);
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const textButton =
    buttonColor === "MediumVioletRed" ? "Midnight Blue" : "Medium Violet Red";
  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <>
      <ContainerQuiz>
        <TitleQuiz>Quiz 26</TitleQuiz>
        {/*<label>
        <input data-testid="quiz26" type="checkbox"onClick={(e) => setEnableButton(e.target.checked)} />
        {textCheckbox}
      </label>*/}
        <ActionButton
          backgroundColor={buttonColor}
          onClick={() => setButtonColor(newButtonColor)}
        >
          Change to {replaceCamelWithSpaces(textButton)}
        </ActionButton>
      </ContainerQuiz>
    </>
  );
};

export default Quiz26;
