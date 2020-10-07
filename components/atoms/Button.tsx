import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ButtonProps } from '../../types/atoms';
import { primary } from '../../constants/color';
import { boxShadow, hoveredBoxShadow } from '../../constants/shadow';

export const BaseButton: React.FC<ButtonProps> = (props) => <StyledBaseButton r={props.r} {...props} />;
export const Button: React.FC<ButtonProps> = (props) => <StyledButton r={3} hasShadow bgColor={props.primary ? primary : props.bgColor} {...props} />;

const StyledBaseButton = styled.button<ButtonProps>`
  border-radius: ${(props) => (props.r ? `${props.r}px` : undefined)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : undefined)};
`;

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
  ${(props) => (props.hasShadow ? `box-shadow: ${boxShadow}` : undefined)};
  &:hover {
    ${(props) => (props.hasShadow ? `box-shadow: ${hoveredBoxShadow}` : undefined)};
  }
  ${(props) => (props.hasShadow ? 'transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' : undefined)};
  padding: 0 10px;
`;
