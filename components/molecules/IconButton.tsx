import React from 'react';
import { BaseButton } from '../atoms/Button';
import { SmallIcon, MediumIcon } from '../atoms/Icon';
import { IconButtonProps } from "../../types/molecules";

export const SmallIconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <BaseButton onClick={props.onClick}>
      <SmallIcon role="button" { ...props }/>
    </BaseButton>
  );
};

export const MediumIconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <BaseButton onClick={props.onClick}>
      <MediumIcon role="button" { ...props }/>
    </BaseButton>
  );
};