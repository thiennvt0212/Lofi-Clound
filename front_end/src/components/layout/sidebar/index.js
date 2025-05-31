import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClock,
  faShareNodes,
  faSliders,
  faTimes,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Modal from "../Modal";
import Button from "../../button";
import ButtonSidebar from "../../buttonSidebar";

import mixiradio from "../../../acssets/audios/Mixi raio.mp3";
import lofiNoBeat from "../../../acssets/audios/Nhạc Lofi không lời  Nhạc nhẹ nhàng thư giãn nhất  CHILL CHAN.mp3";
import lofiChill from "../../../acssets/audios/Từng Là, Giữa Đại Lộ Đông Tây, Thu Cuối, Có Em Chờ  - Những Bản Hits Nhạc Trẻ Nhẹ Nhàng Cực Chill.mp3";
import Pomodoro from "../Prodomo";

import keyboard from "../../../acssets/audios/effects-sound/mixkit-slow-typing-on-a-keyboard-2532.wav";
import fire from "../../../acssets/audios/effects-sound/mixkit-campfire-crackles-1330.wav";
import traffic from "../../../acssets/audios/effects-sound/mixkit-road-traffic-sound-2463.wav";
import birds from "../../../acssets/audios/effects-sound/mixkit-morning-birds-2472.wav";
import sea from "../../../acssets/audios/effects-sound/mixkit-sea-waves-with-birds-loop-1185.wav";
import wind from "../../../acssets/audios/effects-sound/mixkit-urban-ambience-during-the-day-2505.wav";
import water from "../../../acssets/audios/effects-sound/mixkit-water-flowing-ambience-loop-3126.wav";
import fan from "../../../acssets/audios/effects-sound/table-fan-sound-01-318509.mp3";
import frogs from "../../../acssets/audios/effects-sound/frogs-croaking-329854.mp3";

const cx = classNames.bind(styles);
function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPomodoroOpen, setIsPomodoroOpen] = useState(false);
  const [hovered, setHovered] = useState(true);

  const mixiradioRef = useRef(null);
  const lofiNoBeatRef = useRef(null);
  const lofiChillRef = useRef(null);
  const KeyBoardRef = useRef(null);
  const fireRef = useRef(null);
  const trafficRef = useRef(null);
  const birdsRef = useRef(null);
  const seaRef = useRef(null);
  const windRef = useRef(null);
  const waterRef = useRef(null);
  const fanRef = useRef(null);
  const frogsRef = useRef(null);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-sidebar")}>
        <div className={cx("wrapper-btn")}>
          <ButtonSidebar
            icon={faSliders}
            name="Mixer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <div className={cx("wrapper-btn")}>
          <ButtonSidebar
            icon={faClock}
            name="Pomodoro"
            onClick={() => setIsPomodoroOpen(true)}
          />
        </div>
        <div className={cx("wrapper-btn")}>
          <ButtonSidebar icon={faBook} name="Mixer" />
        </div>
        <div className={cx("wrapper-btn")}>
          <ButtonSidebar icon={faWrench} name="Tool" />
        </div>
      </div>

      <audio controls className={cx("audio")} ref={mixiradioRef}>
        <source src={mixiradio} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={lofiNoBeatRef}>
        <source src={lofiNoBeat} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={lofiChillRef}>
        <source src={lofiChill} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={KeyBoardRef} loop>
        <source src={keyboard} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      {/*  */}

      <audio controls className={cx("audio")} ref={fireRef} loop>
        <source src={fire} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={trafficRef} loop>
        <source src={traffic} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={birdsRef} loop>
        <source src={birds} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={seaRef} loop>
        <source src={sea} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={windRef} loop>
        <source src={wind} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={waterRef} loop>
        <source src={water} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={fanRef} loop>
        <source src={fan} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <audio controls className={cx("audio")} ref={frogsRef} loop>
        <source src={frogs} type="audio/mpeg" />
        Trình duyệt không hỗ trợ phát âm thanh.
      </audio>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        audioRefs={{
          mixiradioRef,
          lofiNoBeatRef,
          lofiChillRef,
          KeyBoardRef,
          fireRef,
          trafficRef,
          birdsRef,
          seaRef,
          windRef,
          waterRef,
          fanRef,
          frogsRef
        }}
      />

      <Pomodoro
        isOpen={isPomodoroOpen}
        onClose={() => setIsPomodoroOpen(false)}
      />
    </div>
  );
}

export default Sidebar;
