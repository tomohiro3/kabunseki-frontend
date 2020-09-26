import React from 'react';
import styled from 'styled-components';

import { Input } from '../atoms/Input';
import { BaseButton } from '../atoms/Button';
import { SmallIcon } from '../atoms/Icon';
import { SearchBarProps } from "../../types/organisms";

// This component has its own meaning by its self as input element having search icon, although it can be reusable, so I make this component as organism.
export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <SearchBarWrapper className={props.className}>
      <SearchBarInput type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
      <SearchBarButton type="submit" onClick={props.onClick} >
        <SmallIcon iconName="icon-search1" { ...props }/>
      </SearchBarButton>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.form<SearchBarProps>`
  display: flex;
  justify-content: space-around;
  height: 30px;
  border: 1px solid #dfe1e5;
  border-radius: 20px;
`

const SearchBarInput = styled(Input)`
  width: 100%;
  min-width: 160px;
  margin: 0 10px 0 10px;
  border: none;
  background-color: transparent;
`

const SearchBarButton = styled(BaseButton)`
  padding: 3px 12px 0 0; 
`