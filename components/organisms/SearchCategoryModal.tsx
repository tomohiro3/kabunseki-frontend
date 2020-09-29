import React from "react";
import styled from "styled-components";
import { Modal, ModalContent } from "../atoms/Modal";
import { MediumIconButton } from "../molecules/IconButton";
import { SearchCategoryModalProps } from "../../types/organisms";

export const SearchCategoryModal: React.FC<SearchCategoryModalProps> = ({ open, onClick }) => {
  return (
    <Modal open={open}>
      <ModalContent>
        <ModalButtonWrapper>
          <MediumIconButton iconName="icon-times" onClick={onClick} />
        </ModalButtonWrapper>
        <div>
          TEST
        </div>
      </ModalContent>
    </Modal>
  )
}

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`