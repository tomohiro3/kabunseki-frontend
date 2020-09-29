import React from "react";
import styled from "styled-components";
import { ModalProps } from "../../types/atoms";
import { mobile, navWidth } from "../../constants/length";

export const Modal: React.FC<ModalProps> = props => props.open ? <StyledModal {...props} /> : null;
export const ModalContent: React.FC = props => <StyledModalContent {...props} />;

const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  @media only screen and (max-width: ${mobile}) {
      overflow: auto;
  }
`
const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 85%;
  
  @media only screen and (max-width: ${mobile}) {
    top: 30%;
    transform: translateX(-50%) translateY(-30%);
    padding: 10px;
    height: 80%;
  }
`