import React from "react";
import styled from "styled-components";

type ListProps = { flex?: boolean; }

export const List: React.FC<ListProps> = props => <StyledList {...props} />
export const ListItem: React.FC<ListProps> = props => <StyledListItem {...props} />

const StyledList = styled.ul<ListProps>`
  display: ${props => props.flex ? "flex" : null}
`

const StyledListItem = styled.li`
  // display: inline-block;
`