import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassMartini, faVolumeOff, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./ButtonSidebar.module.scss";

const cx = classNames.bind(styles);
function ButtonSidebar({ icon, name,onClick, className }) {
  const [hovered, setHovered] = useState(false);


  return (
    <div className={cx("wrapper")}>
      <div className={cx("text", { textVisible: hovered })}>
        {name}
      </div>
      <button
        onClick={onClick}
        className={cx("button", className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FontAwesomeIcon icon={icon} className={cx("icon")} />
      </button>
      
    </div>
  );
}

export default ButtonSidebar;
