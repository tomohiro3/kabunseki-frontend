import React from "react";
import styled from "styled-components";
import { Modal, ModalContentBase } from "../molecules/Modal";
import { MediumIconButton } from "../molecules/IconButton";
import { SearchCategoryModalProps } from "../../types/organisms"

export const SearchCategoryModal: React.FC<SearchCategoryModalProps> = props => {
  return (
    <Modal {...props} >
      <ModalContent>
        <StyledTimesButtonWrapper>
          <MediumIconButton iconName="icon-times" id={props.buttonId} onClick={props.onClick} />
        </StyledTimesButtonWrapper>
        <StyledCategoryTableWrapper>
          <table>
            <thead>
              <tr>
                <th>col1</th>
                <th>col2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>data1</td>
                <td>data2</td>
              </tr>
            </tbody>
          </table>
        </StyledCategoryTableWrapper>
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
  width: 650px;
  height: 700px;
`

const StyledCategoryTableWrapper = styled.div`
  height: 100%;
  margin: 5px 48px 39px 48px;
  background-color: red;
`