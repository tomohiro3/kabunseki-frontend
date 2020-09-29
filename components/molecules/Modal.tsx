import React from "react";
import styled from "styled-components";
import { ModalProps } from "../../types/molecules";
import { mobile } from "../../constants/length";

export const Modal: React.FC<ModalProps> = props => props.open ? (
  <StyledModal role="presentation" id={props.id}>
    <ModalBackDrop onClick={props.onClick}/>
    {props.children}
  </StyledModal>
 ) : null;
const ModalBackDrop: React.FC<React.HTMLAttributes<HTMLElement>> = props => <StyledModalBackdrop  aria-hidden="true" onClick={props.onClick} />;

export const ModalContentBase: React.FC = props => <StyledModalContent {...props} />;

const StyledModal = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  overflow: auto;
`
const StyledModalBackdrop = styled.div`
  position: fixed;
  z-index: -1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`
const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  max-width: 80%;
  max-height: 85%;
  
  @media only screen and (max-width: ${mobile}) {
    /* top: 30%;
    transform: translateX(-50%) translateY(-30%); */
    padding: 10px;
    max-height: 80%;
  }
`