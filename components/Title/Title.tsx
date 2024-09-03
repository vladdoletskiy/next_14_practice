import { TitleProps } from "./Title.props";
import style from "./Title.module.css";

export const Title = ({ tag = "h1", children }: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={style.h1}>{children}</h1>;
    case "h2":
      return <h2 className={style.h2}>{children}</h2>;
    case "h3":
      return <h3 className={style.h3}>{children}</h3>;
    default:
      return <h1 className={style.h1}>{children}</h1>;
  }
};
