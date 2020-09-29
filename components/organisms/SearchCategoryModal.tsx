import React from "react";
import styled from "styled-components";
import { Modal, ModalContent } from "../atoms/Modal";
import IconButton from "../molecules/IconButton";
import { SearchCategoryModalProps } from "../../types/organisms";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export const SearchCategoryModal: React.FC<SearchCategoryModalProps> = ({ open, onClick }) => {
  return (
    <Modal open={open}>
      <ModalContent>
        <IconButton iconName="icon-times" onClick={onClick} />
      </ModalContent>
    </Modal>
  )
}