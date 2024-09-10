import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "ghost";
  children: ReactNode;
  arrow?: "down" | "right" | "none";
}
