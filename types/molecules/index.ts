import { IconProps, ButtonProps } from "../atoms";

export type IconButtonProps = IconProps & ButtonProps;
export type ModalProps = IconButtonProps & { open: boolean, };