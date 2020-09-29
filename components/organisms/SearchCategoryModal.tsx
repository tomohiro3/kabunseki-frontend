import React from "react";
import styled from "styled-components";
import { Modal, ModalContent } from "../atoms/Modal";
import { MediumIconButton } from "../molecules/IconButton";
import { SearchCategoryModalProps } from "../../types/organisms";

export const SearchCategoryModal: React.FC<SearchCategoryModalProps> = ({ open, onClick }) => {
  return (
    <Modal open={open}>
      <ModalContent>
        <MediumIconButton iconName="icon-times" onClick={onClick} />
      </ModalContent>
    </Modal>
  )
}