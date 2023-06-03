import styles from "./styles.module.scss";
import Marquee from "./lib/Marquee/index";
import NumberDisplay from "./lib/NumberDisplay/index";
import { useEffect, useState, useMemo } from "react";
import dayjs from "dayjs";

function App() {

  const [time, setTime] = useState<number>(Date.now().valueOf())
  
  const format_time = useMemo(() => {
    return dayjs(time).format('HH:mm:ss')
  }, [time])

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now().valueOf())
    }, 1000)
  }, [])

  return (
    <div className={styles.wrapper_content}>
      <div className={styles.marquee_wrapper}>
        <Marquee
          delay="1s"
          direction="right"
          gredientColor="red"
          gredientWidth={200}
          speed={500}
          className={styles.marquee}
          pauseOnHover
        >
          <div className={styles.content}>
            {Array(10)
              .fill("")
              .map((_, index) => (
                <span className={styles.item} key={index}>
                  {index}
                </span>
              ))}
          </div>
        </Marquee>
      </div>
      <div className={styles.number_wrapper}>
        <NumberDisplay numberString={format_time} />
      </div>
    </div>
  );
}

export default App;
