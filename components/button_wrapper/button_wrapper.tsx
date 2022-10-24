import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type ButtonWrapperProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
};

export const ButtonWrapper: FC<ButtonWrapperProps> = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};
