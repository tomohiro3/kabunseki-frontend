import React from 'react';
import styled from 'styled-components';

// Need to inherit the type below, otherwise type property won't work
// type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InvisibleInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <StyledInvisibleInput {...props} />;
export const InvisibleTextField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <InputContainer>
      <InvisibleInput {...props} />
    </InputContainer>
  );
};

const StyledInvisibleInput = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;