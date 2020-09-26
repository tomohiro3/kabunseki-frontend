import React from "react";
import styled from "styled-components";
import { SvgProps, IconProps } from "../../types/atoms";
import Icons from "../../assets/sprite.svg";
import { color } from "../../constants/color";

export const Icon: React.FC<IconProps> = props => {
  return (
    <StyledSvg width={`${props.size}px`} height={`${props.size}px`} fill={props.fill} >
      <use xlinkHref={`${Icons}#${props.iconName}`} />
    </StyledSvg>
  )
}
export const MediumIcon: React.FC<IconProps> = props => <Icon size={38} fill={props.primary ? color.primary : props.fill} iconName={props.iconName} />;
export const SmallIcon: React.FC<IconProps> = props => <Icon size={14} fill={props.primary ? color.primary : props.fill} iconName={props.iconName} />;

// Might not need this ?
const StyledSvg = styled.svg<SvgProps>`
  ${props => (props.fill ? "fill: props.fill" : undefined)}
`