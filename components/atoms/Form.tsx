import React from 'react';
import styled from 'styled-components';

// Might not need this
// type FormProps = React.FormEvent<HTMLInputElement> & { target: string, children: Element[] };

export const Form: React.FC = props => <StyledForm {...props} />;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  padding: 0 15px;
`;