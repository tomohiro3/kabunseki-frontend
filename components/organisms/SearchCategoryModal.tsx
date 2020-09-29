import React from "react";
import styled from "styled-components";
import { Modal, ModalContentBase } from "../molecules/Modal";
import { MediumIconButton } from "../molecules/IconButton";
import { ModalProps } from "../../types/molecules";

export const SearchCategoryModal: React.FC<ModalProps> = props => {
  return (
    <Modal {...props} >
      <ModalContent>
        <StyledTimesButtonWrapper>
          <MediumIconButton iconName="icon-times" id={props.buttonId} onClick={props.onClick} />
        </StyledTimesButtonWrapper>
        <div>
          TEST
        </div>
      </ModalContent>
    </Modal>
  )
}

const StyledTimesButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
const ModalContent = styled(ModalContentBase)`
  width: 500px;
  height: 700px;
`