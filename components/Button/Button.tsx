import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import cn from "classnames";
import Image from "next/image";
import ArrowSVG from "./arrow.svg";

const arrowStyle = {
  color: "white",
};

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(style.button, className, {
        [style.primary]: appearance == "primary",
        [style.ghost]: appearance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span
          className={cn(style.arrow, {
            [style.down]: arrow == "down",
          })}
        >
          <ArrowSVG />
        </span>
      )}
    </button>
  );
};
