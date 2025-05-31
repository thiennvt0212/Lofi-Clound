import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import backgroundlight from "../../acssets/images/ChatGPT Image 03_31_07 27 thg 5, 2025.png";
import backgroundDark from "../../acssets/images/darkMode.png";
import { useDarkMode } from "../../components/layout/Context";

const cx = classNames.bind(styles);
function HomePage() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={cx("wrapper")}>
      <img
        src={backgroundlight}
        alt="light background"
        className={cx("bg-image", { active: !isDarkMode })}
      />
      <img
        src={backgroundDark}
        alt="dark background"
        className={cx("bg-image", { active: isDarkMode })}
      />
    </div>
  );
}

export default HomePage;
