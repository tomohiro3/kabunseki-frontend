import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ButtonProps } from "../../types/atoms";

export const Button: React.FC<ButtonProps> = props => <button r={props.r} {...props} />;

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
