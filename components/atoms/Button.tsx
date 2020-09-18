import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../types/atoms";

export const Button:React.FC<ButtonProps> = props => <StyledButton {...props} />;

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.color ? props.color : "transparent"};
  border-radius: ${props => props.r ? props.r : undefined}
`