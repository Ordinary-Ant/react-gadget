import { CSSProperties, FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import classNames from "classNames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  delay: CSSProperties["animationDelay"];
  direction?: "left" | "right";
  gredientColor?: string;
  gredientWidth?: CSSProperties["width"];
  pauseOnHover?: boolean
}

const Marquee: FC<Props> = (props: Props) => {
  const {
    delay,
    direction = "left",
    children,
    className,
    gredientColor,
    gredientWidth,
    pauseOnHover,
    ...restProps
  } = props;

  const contentStyles: CSSProperties = {
    animationDelay: delay,
    animationDirection: direction == "right" ? "reverse" : undefined,
  };
  return (
    <div className={classNames(styles.marquee, className, {[styles.pauseOnHover]: pauseOnHover})} {...restProps}>
      <div className={styles.content} style={contentStyles}>
        {children}
      </div>
      <div className={styles.content} style={contentStyles}>
        {children}
      </div>
      {gredientColor && (
        <>
          <div
            className={classNames(styles.overlay, styles.leftOverlay)}
            style={{
              width: gredientWidth,
              background: `linear-gradient(90deg, ${gredientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          ></div>
          <div
            className={classNames(styles.overlay, styles.rightOverlay)}
            style={{
              width: gredientWidth,
              background: `linear-gradient(270deg, ${gredientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Marquee;
