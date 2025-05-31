import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassMartini, faVolumeOff, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({ icon, name,onClick }) {
  const [hovered, setHovered] = useState(false);


  return (
    <div className={cx("wrapper")}>
      <button
        onClick={onClick}
        className={cx("button")}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FontAwesomeIcon icon={icon} className={cx("icon")} />
      </button>
      <div className={cx("text", { textVisible: hovered })}>
        {name}
      </div>
    </div>
  );
}

export default Button;
