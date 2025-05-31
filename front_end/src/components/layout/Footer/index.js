import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

import logo from "../../../acssets/images/Blue Cloud Icon Community & Non-Profit Logo.png";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sline-content")}>
        <marquee>Lofi cloud - Design By Trung Thien</marquee>
      </div>
      <div className={cx("logo-wrapper")}>
        <img src={logo} alt="logo" className={cx("logo")} />
      </div>
    </div>
  );
}

export default Footer;
