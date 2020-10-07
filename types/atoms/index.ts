export type ListProps = { flex?: boolean; row?: boolean };
export type SvgProps = { fill?: string; role?: string };
export type IconProps = SvgProps & { iconName?: string; wh?: string; primary?: boolean };
// Need to make button get basic html attributes for onClick
// Need to inherit the type below, otherwise onClick won't work
// interface ButtonProps extends React.HTMLAttributes<HTMLElement>{};
export type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & { bgColor?: string; r?: number; hasShadow?: boolean; primary?: boolean };
// Need to inherit the type below, otherwise type property won't work
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
