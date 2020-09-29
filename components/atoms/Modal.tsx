import React from "react";
import styled from "styled-components";
import { ModalProps } from "../../types/atoms";

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
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`

const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`