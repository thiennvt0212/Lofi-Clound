import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import logoLight from "../../../acssets/images/Blue Cloud Icon Community & Non-Profit Logo.png";
import logoDark from "../../../acssets/images/Blue Cloud Icon Community & Non-Profit Logo (1).png";

import {
  faCompress,
  faExpand,
  faGlassMartini,
  faMoon,
  faPlay,
  faShareNodes,
  faSun,
  faUpDown,
  faUpload,
  faUpLong,
  faVolumeHigh,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "../../button";
import { useDarkMode } from "../Context";

const cx = classNames.bind(styles);
function Header() {
  const [status, setStatus] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const [statusScreen, setStatusScreen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    return () => clearInterval(interval); // dọn dẹp khi component unmount
  }, []);

  const formattedTime = time.toLocaleTimeString("vi-VN"); // Giờ:Phút:Giây
  const formattedDate = time.toLocaleDateString("vi-VN");

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setStatusScreen(true);
    } else {
      document.exitFullscreen();
      setStatusScreen(false);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo-wrapper")}>
          <img src={logoLight} alt="light logo" className={cx("logo", { active: !isDarkMode })} />
          <img src={logoDark} alt="dark logo" className={cx("logo", { active: isDarkMode })} />
        </div>
        <div className={cx("menu-header")}>
          <div className={cx("btn-sign-up")}>
            <span>
              🕒 {formattedTime} | 📅 {formattedDate}
            </span>
          </div>
          <Button icon={isDarkMode ? faMoon :faSun} name="" onClick={() => setIsDarkMode(!isDarkMode)}
            statusMode={isDarkMode}/>
          <div className={cx("sline-content")}>
            <span>📻</span>
            <marquee> Lofi cloud - Design By Trung Thien</marquee>
          </div>
          <button className={cx("btn-sign-up")}>
            <span>Sign up</span>
          </button>
          <Button icon={faShareNodes} name="Share" />
          <Button
            icon={status ? faVolumeXmark : faVolumeHigh}
            name="Volume"
            onClick={() => setStatus(!status)}
            status={status}
          />
          <Button
            icon={statusScreen ? faCompress : faExpand}
            name="Full Screen"
            onClick={handleFullscreen}
          />
          <Button icon={faUpload} name="Upload" />
        
        </div>
      </div>
    </div>
    
  );
}

export default Header;
