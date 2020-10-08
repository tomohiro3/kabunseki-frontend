import React from 'react';
import styled from 'styled-components';
import { TypographyProps } from '../../types/atoms';

export const Typography: React.FC<TypographyProps> = (props) =>
  props.h1 ? (
    <h1>{props.children}</h1>
  ) : props.h2 ? (
    <h2>{props.children}</h2>
  ) : props.h3 ? (
    <h3>{props.children}</h3>
  ) : props.h4 ? (
    <h4>{props.children}</h4>
  ) : props.h5 ? (
    <h5>{props.children}</h5>
  ) : props.h6 ? (
    <h6>{props.children}</h6>
  ) : (
    <p>{props.children}</p>
  );
