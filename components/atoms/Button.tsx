import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ButtonProps } from "../../types/atoms";
import { primary } from "../../constants/color"

export const BaseButton: React.FC<ButtonProps> = props => <StyledBaseButton r={props.r} {...props} />;
export const Button: React.FC<ButtonProps> = props => <StyledButton r={3} hasShadow bgColor={props.primary ? primary : props.bgColor} {...props} />;

const StyledBaseButton = styled.button<ButtonProps>`
  border-radius: ${props => props.r ? `${props.r}px` : undefined};
  background-color: ${props => props.bgColor ? props.bgColor : undefined};
`

// const ripple = keyframes`
//   0% {
//     opacity: 0;
//     background-color: black;
//     transform: scale(-1.0);
//   }
//   100% {
//     opacity: 1;
//     background-color: transparent;
//     transform: scale(1.0);
//   }
// `

const StyledButton = styled(BaseButton)`
  ${props => props.hasShadow ? "box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)" : undefined};
  &:hover {
    ${props => props.hasShadow ? "box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)" : undefined};
  }
  ${props => props.hasShadow ? "transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" : undefined};
  padding: 0 10px;
`
