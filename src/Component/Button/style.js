import { Button } from "antd";
import styled from "styled-components";
import { PrimaryColor, SecondaryColor, thiredColor } from "../../Config";

export const Wrapper = styled(Button)`
  color: ${PrimaryColor} !important;
  border-color: ${PrimaryColor} !important;
  background: ${PrimaryColor} !important;
  &:hover {
    color: black !important;
    background: ${thiredColor} !important;
  }
`;