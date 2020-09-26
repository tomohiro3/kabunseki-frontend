import React from 'react';
import { Button } from '../atoms/Button';
import { SmallIcon } from '../atoms/Icon';
import { IconButtonProps } from "../../types/molecules";


const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button onClick={props.onClick}>
      <SmallIcon { ...props }/>
    </Button>
  );
};

export default IconButton;