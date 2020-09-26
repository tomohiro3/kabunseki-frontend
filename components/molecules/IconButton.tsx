import React from 'react';
import { BaseButton } from '../atoms/Button';
import { SmallIcon } from '../atoms/Icon';
import { IconButtonProps } from "../../types/molecules";


const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <BaseButton onClick={props.onClick}>
      <SmallIcon { ...props }/>
    </BaseButton>
  );
};

export default IconButton;