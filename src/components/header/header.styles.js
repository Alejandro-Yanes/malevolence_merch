import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const UserLogedIn = styled.span`
  padding-right: 15px;
  align-self: flex-end;
`;
