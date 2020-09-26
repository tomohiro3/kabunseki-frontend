import React from 'react';
import styled from 'styled-components';

import { Input } from '../atoms/Input';
import IconButton from '../molecules/IconButton';
import { SearchBarProps } from "../../types/organisms";

// This component has its own meaning by its self as input element having search icon, although it can be reusable, so I make this component as organism.
export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <SearchBarWrapper className={props.className}>
      <SearchBarInput type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
      <IconButton type="submit" onClick={props.onClick} iconName="icon-search1" {...props} />
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.form<SearchBarProps>`
  position: relative;
  display: flex;
  height: 30px;
  border: 1px solid #dfe1e5;
  border-radius: 20px;
`

const SearchBarInput = styled(Input)`
  margin: 0 7px 0 10px;
  border: none;
  background-color: transparent;
`