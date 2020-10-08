export type ListProps = { flex?: boolean; row?: boolean };
export type SvgProps = { fill?: string; role?: string };
export type IconProps = SvgProps & { iconName?: string; wh?: string; primary?: boolean };
export type TypographyProps = { h1?: boolean; h2?: boolean; h3?: boolean; h4?: boolean; h5?: boolean; h6?: boolean };
// Need to make button get basic html attributes for onClick
// Need to inherit the type below, otherwise onClick won't work
// interface ButtonProps extends React.HTMLAttributes<HTMLElement>{};
export type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & { bgColor?: string; r?: number; hasShadow?: boolean; primary?: boolean };
// Need to inherit the type below, otherwise type property won't work
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
