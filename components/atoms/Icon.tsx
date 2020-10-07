import React from 'react';
import styled from 'styled-components';
import { IconProps } from '../../types/atoms';
import Icons from '../../assets/sprite.svg';
import { primary } from '../../constants/color';
import { mobile } from '../../constants/length';

// Since svg element's viewBox actually doesn't give width and height to its self, need to wrap it with something that can have width and height.
// You can give width and height attribute to svg element directly but it doesn't seem how it works
// Hence I made in this way and The Icon component looks having some components
// then you can think this is molecule but as mentioned above, wrapping span tag does no big deal and also svg element can't do anything by its self,
// so I call this component as atom.
// Or You can give fontSize attribute to svg instead
export const Icon: React.FC<IconProps> = (props) => {
  return (
    <StyledSpan wh={props.wh}>
      <svg role={props.role} viewBox="0 0 24 24" fill={props.primary ? primary : props.fill}>
        <use xlinkHref={`${Icons}#${props.iconName}`} />
      </svg>
    </StyledSpan>
  );
};
export const MediumIcon: React.FC<IconProps> = (props) => <Icon wh="m" fill={props.primary ? primary : props.fill} {...props} />;
export const SmallIcon: React.FC<IconProps> = (props) => <Icon wh="s" fill={props.primary ? primary : props.fill} {...props} />;

const StyledSpan = styled.span<IconProps>`
  display: inline-block;
  width: ${(props) => (props.wh == 'm' ? '38px' : props.wh == 's' ? '14px' : undefined)};
  height: ${(props) => (props.wh == 'm' ? '38px' : props.wh == 's' ? '14px' : undefined)};

  @media only screen and (max-width: ${mobile}) {
    width: ${(props) => (props.wh == 'm' ? '24px' : props.wh == 's' ? '14px' : undefined)};
    height: ${(props) => (props.wh == 'm' ? '24px' : props.wh == 's' ? '14px' : undefined)};
  }
`;
