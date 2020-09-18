import React from 'react';
import styled from 'styled-components';

import { InvisibleInput } from '../atoms/Input';
import { Form } from '../atoms/Form';
// import IconButton from '../IconButton';

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement> & React.ButtonHTMLAttributes<HTMLElement>;

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <Form>
      <InvisibleInputContainer>
        <InvisibleInput type="text" value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
      </InvisibleInputContainer>
      {/* <IconButtonContainer>
        <IconButton onClick={props.onClick} iconName="icon-search" />
      </IconButtonContainer> */}
    </Form>
  );
};

const IconButtonContainer = styled.div`
  display: flex;
  margin-left: 9px;
  border-radius: 50%;
`;

const InvisibleInputContainer = styled.div`
  display: flex;
  width: 100%;
`;