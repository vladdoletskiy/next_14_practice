import { TagProps } from "./Tag.props";
import style from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "small",
  children,
  className,
  color = "ghost",
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(style.tag, className, {
        [style.small]: size == "small",
        [style.medium]: size == "medium",
        [style.ghost]: color == "ghost",
        [style.red]: color == "red",
        [style.primary]: color == "primary",
        [style.grey]: color == "grey",
        [style.green]: color == "green",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
