import { CSSProperties, FC, HTMLAttributes, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classNames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  startPlay?: boolean,
  speed?: number,
  delay: CSSProperties["animationDelay"];
  direction?: "left" | "right";
  gredientColor?: string;
  gredientWidth?: CSSProperties["width"];
  pauseOnHover?: boolean
}

const Marquee: FC<Props> = (props: Props) => {
  const {
    startPlay = true,
    speed = 20,
    delay,
    direction = "left",
    children,
    className,
    gredientColor,
    gredientWidth,
    pauseOnHover,
    ...restProps
  } = props;

  // 内容区域宽度
  const [contentWidth, setContentWidth] = useState<number>(0)

  // 计算动画间隔
  const duration = contentWidth / speed

  // 内容区Ref对象
  const contentRef= useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (startPlay && contentRef.current) {
      setContentWidth(contentRef.current.getBoundingClientRect().width)
    }
  }, [startPlay])

  // 内容区动态动画效果对象
  const contentStyles: CSSProperties = {
    animationDelay: delay,
    animationDirection: direction == "right" ? "reverse" : undefined,
    animationDuration: `${duration}s`
  }

  return (
    <div className={classNames(styles.marquee, className, {[styles.pauseOnHover]: pauseOnHover})} {...restProps}>
      <div ref={ contentRef } className={styles.content} style={contentStyles}>
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
