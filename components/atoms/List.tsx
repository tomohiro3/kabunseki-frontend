import React from 'react';
import styled from 'styled-components';
import { ListProps } from '../../types/atoms';

// Need to change these components reusability
export const List: React.FC<ListProps> = (props) => <StyledList {...props} />;

const StyledList = styled.ul<ListProps>`
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
`;
