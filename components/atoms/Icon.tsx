import React from "react";
import styled from "styled-components";
import { IconProps } from "../../types/atoms";
import Icons from "../../assets/sprite.svg";
import { color } from "../../constants/color";

// Since svg element's viewBox actually doesn't give width and height to its self, need to wrap it with something that can have width and height.
export const Icon: React.FC<IconProps> = props => {
  return (
      <StyledSpan size={props.size}>
        <svg viewBox={`0 0 ${props.size} ${props.size}`} fill={props.fill} >
          <use xlinkHref={`${Icons}#${props.iconName}`} />
        </svg>
      </StyledSpan>
  )
}
export const MediumIcon: React.FC<IconProps> = props => <Icon size={38} fill={props.primary ? color.primary : props.fill} iconName={props.iconName} />;
export const SmallIcon: React.FC<IconProps> = props => <Icon size={14} fill={props.primary ? color.primary : props.fill} iconName={props.iconName} />;

const StyledSpan = styled.span<IconProps>`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`