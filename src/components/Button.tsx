import React from "react";
import "./Button.scss";

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

export const Button = ({ className, ...props }: ButtonProps) => (
  <button className={`${className} btn`} {...props} />
);
