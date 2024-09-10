import { ParagraphProps } from "./Paragraph.props";
import style from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({
  size = "small",
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(style.paragraph, className, {
        [style.small]: size == "small",
        [style.medium]: size == "medium",
        [style.large]: size == "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
