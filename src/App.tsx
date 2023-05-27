import styles from "./styles.module.scss";
import Marquee from "./lib/Marquee/index";

function App() {
  return (
    <Marquee
      delay="1s"
      direction="right"
      gredientColor="red"
      gredientWidth={200}
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
  );
}

export default App;
