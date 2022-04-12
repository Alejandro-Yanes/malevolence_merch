import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #000000;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const isShopButton = css`
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  bottom: 30px;
  width: 100%;
  opacity: 0.7;
  background-color: white;
  color: black;
  transition: all 0.2s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.isShopButton ? isShopButton : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  min-height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 300;
  cursor: pointer;
  border: none;

  ${getButtonStyles}
`;
