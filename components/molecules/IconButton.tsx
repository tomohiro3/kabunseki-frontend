import React from 'react';
import { TransparentButton } from '../../atoms/Button';
import { SmallSvg } from '../../atoms/Svg';
import Icon from '../../assets/sprites.svg';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLElement> & { iconName: string };

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <TransparentButton onClick={props.onClick}>
      <SmallSvg>
        <use xlinkHref={`${Icon}#${props.iconName}`}></use>
      </SmallSvg>
    </TransparentButton>
  );
};

export default IconButton;