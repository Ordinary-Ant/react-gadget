import { FC } from "react";
import styles from "./styles.module.scss";

interface Props{
  numberString: string
}

const digitArr: number[] = [0,1,2,3,4,5,6,7,8,9]
const reg: RegExp = /\d/

const NumberDisplay: FC<Props> = (props: Props) => {
  const {
    numberString
  } = props;

  return (
    <div className={styles.displayWrapper}>
      { numberString.split('').map((item, i) => (
        <div className={styles.digitWrapper}>
          {
            reg.test(item) ? (
              <span className={styles.digitlist} style={{ 
                transform: `translate(-50%, ${-Number(item) * 10}%)`,
                transitionDelay: `${i * 50}ms`
              }}>
                {digitArr.map(digit => <span className={styles.digit} key={digit}>{digit}</span>)}
              </span>
            ) : (
              <span>{item}</span>
            )
          }
        </div>
      )) }
    </div>
  );
};

export default NumberDisplay;
