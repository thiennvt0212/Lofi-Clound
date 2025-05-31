import classNames from "classnames/bind";

import styles from "./Modal.module.scss";
import logo from "../../../acssets/images/Blue Cloud Icon Community & Non-Profit Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCake,
  faChevronRight,
  faClose,
  faForwardStep,
  faLeaf,
  faMugHot,
  faPlay,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "../../button";

const cx = classNames.bind(styles);
function Modal({ isOpen, onClose, audioRefs }) {
  const musicModeRef = useRef();
  const musicPlayRef = useRef();
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [volumeFire, setVolumeFire] = useState(0);
  const [volumeTraffic, setVolumeTraffic] = useState(0);
  const [volumeBirds, setVolumeBirds] = useState(0);
  const [volumeSea, setVolumeSea] = useState(0);
  const [volumeWind, setVolumeWind] = useState(0);
  const [volumeWater, setVolumeWater] = useState(0);
  const [volumeKeyBoard, setVolumeKeyBoard] = useState(0);
  const [volumeFan, setVolumeFan] = useState(0);
  const [volumeFrogs, setVolumeFrogs] = useState(0);

  const mixiradio = audioRefs.mixiradioRef.current;
  const lofiNoBeat = audioRefs.lofiNoBeatRef.current;
  const lofiChill = audioRefs.lofiChillRef.current;

  const soundKeyBoard = audioRefs.KeyBoardRef.current;
  const soundFire = audioRefs.fireRef.current;
  const soundTraffic = audioRefs.trafficRef.current;
  const soundBirds = audioRefs.birdsRef.current;
  const soundSea = audioRefs.seaRef.current;
  const soundWind = audioRefs.windRef.current;
  const soundWater = audioRefs.waterRef.current;
  const soundFan = audioRefs.fanRef.current;
  const soundFrogs = audioRefs.frogsRef.current;

  if (!isOpen) return null;
  const togglePlay = (target) => {
    if (target === "lofiNoBeat") {
      if (currentPlaying === "lofiNoBeat") {
        lofiNoBeat.pause();
        setCurrentPlaying(null);
        musicModeRef.current.classList.remove(styles.slideInt);
        musicPlayRef.current.classList.remove(styles.slideOut);
      } else {
        lofiChill.pause();
        mixiradio.pause();
        lofiNoBeat.play();
        setCurrentPlaying("lofiNoBeat");
        musicModeRef.current.classList.add(styles.slideOut);
        setTimeout(() => {
          musicPlayRef.current.classList.add(styles.slideInt);
        }, 300);
      }
    } else if (target === "lofiChill") {
      if (currentPlaying === "lofiChill") {
        lofiChill.pause();
        setCurrentPlaying(null);
        musicModeRef.current.classList.remove(styles.slideInt);
        musicPlayRef.current.classList.remove(styles.slideOut);
      } else {
        lofiNoBeat.pause();
        mixiradio.pause();
        lofiChill.play();
        setCurrentPlaying("lofiChill");
        musicModeRef.current.classList.add(styles.slideOut);
        setTimeout(() => {
          musicPlayRef.current.classList.add(styles.slideInt);
        }, 300);
      }
    } else if (target === "mixiradio") {
      if (currentPlaying === "mixiradio") {
        mixiradio.pause();
        setCurrentPlaying(null);
        musicModeRef.current.classList.remove(styles.slideInt);
        musicPlayRef.current.classList.remove(styles.slideOut);
      } else {
        lofiChill.pause();
        lofiNoBeat.pause();
        mixiradio.play();
        setCurrentPlaying("mixiradio");
        musicModeRef.current.classList.add(styles.slideOut);
        setTimeout(() => {
          musicPlayRef.current.classList.add(styles.slideInt);
        }, 300);
      }
    }
  };

  const handleBack = () => {
    musicPlayRef.current.classList.remove(styles.slideInt);
    musicPlayRef.current.classList.add(styles.slideOut);

    musicModeRef.current.classList.remove(styles.slideOut);
    musicModeRef.current.classList.add(styles.slideInt);

    setTimeout(() => {
      musicPlayRef.current.classList.remove(styles.slideOut);
      musicModeRef.current.classList.remove(styles.slideInt);
    }, 300);
  };

  const handlePlay = (target) => {
    if (target === "lofiNoBeat") {
      if (lofiNoBeat.paused) {
        lofiNoBeat.play();
      } else {
        lofiNoBeat.pause();
      }
    } else if (target === "lofiChill") {
      if (lofiChill.paused) {
        lofiChill.play();
      } else {
        lofiChill.pause();
      }
    } else if (target === "mixiradio") {
      if (mixiradio.paused) {
        mixiradio.play();
      } else mixiradio.pause();
    }
  };

  return (
    <div className={cx("wrapper")}>
      <button className={cx("close-button")} onClick={onClose}>
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className={cx("header-modal")}>
        <h4>BeeCoffeeLofi</h4>
        <img src={logo} alt="logo" className={cx("logo")} />
      </div>

      <div className={cx("music-play")} ref={musicPlayRef}>
        <div className={cx("sline-content")}>
          <span>📻</span>
          <marquee> {currentPlaying}</marquee>
        </div>
        <div className={cx("play-content")}>
          <Button icon={faBackwardStep} className={styles.btnPlayContent} />
          <Button
            icon={faPlay}
            className={styles.btnPlayContent}
            onClick={() => {
              handlePlay(currentPlaying);
            }}
          />
          <Button icon={faForwardStep} className={styles.btnPlayContent} />
          <button
            className={cx("btn-back")}
            onClick={() => {
              handleBack();
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <audio ref={audioRefs.mixiradioRef.current} src="/lofi.mp3" />
        </div>
      </div>

      <div className={cx("music-mode")} ref={musicModeRef}>
        <button
          className={cx("button-ms-mode")}
          onClick={() => togglePlay("mixiradio")}
        >
          <span className={cx("icon")} >📻</span>
          <span className={cx("btn-name")}>Mixi Radio</span>
        </button>

        <button
          className={cx("button-ms-mode")}
          onClick={() => togglePlay("lofiNoBeat")}
        >
          <span className={cx("icon")} >☕</span>
          <span className={cx("btn-name")}>Bolero Lofi</span>
        </button>

        <button
          className={cx("button-ms-mode")}
          onClick={() => togglePlay("lofiChill")}
        >
          <span className={cx("icon")} >🍃</span>
          <span className={cx("btn-name")}>Lofi Chill</span>
        </button>
      </div>
      <div className={cx("sound-mode")}>
        <span className={cx("sound-decription")}>
          If you Like my project, Please donate 400 Milions VND. Thanks!
        </span>
        {/* <div className={cx("title-sound")}>
          <h3>Sounds</h3>
        </div> */}
        <div className={cx("volume-slider")}>
          <div className={cx("volume-wrapper")}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volumeBirds}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolumeBirds(newVolume);
                if (soundBirds) {
                  soundBirds.volume = newVolume;
                  if (newVolume === 0) {
                    soundBirds.pause();
                  } else {
                    soundBirds.play();
                  }
                }
              }}
              className={cx("slider")}
              orient="vertical"
            />
            <label>Birds</label>
          </div>
          <div className={cx("volume-wrapper")}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volumeTraffic}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolumeTraffic(newVolume);
                if (soundTraffic) {
                  soundTraffic.volume = newVolume;
                  if (newVolume === 0) {
                    soundTraffic.pause();
                  } else {
                    soundTraffic.play();
                  }
                }
              }}
              className={cx("slider")}
              orient="vertical"
            />
            <label>Traffic</label>
          </div>
          <div className={cx("volume-wrapper")}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volumeFrogs}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolumeFrogs(newVolume);
                if (soundFrogs) {
                  soundFrogs.volume = newVolume;
                  if (newVolume === 0) {
                    soundFrogs.pause();
                  } else {
                    soundFrogs.play();
                  }
                }
              }}
              className={cx("slider")}
              orient="vertical"
            />
            <label>Eck</label>
          </div>
          <div className={cx("volume-wrapper")}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volumeFan}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolumeFan(newVolume);
                if (soundFan) {
                  soundKeyBoard.volume = newVolume;
                  if (soundFan === 0) {
                    soundFan.pause();
                  } else {
                    soundFan.play();
                  }
                }
              }}
              className={cx("slider")}
              orient="vertical"
            />
            <label>Fan</label>
          </div>
          <div className={cx("volume-wrapper")}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volumeFire}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolumeFire(newVolume);
                if (soundFire) {
                  soundFire.volume = newVolume;
                  if (newVolume === 0) {
                    soundFire.pause();
                  } else {
                    soundFire.play();
                  }
                }
              }}
              className={cx("slider")}
              orient="vertical"
            />
            <label>Fire</label>
          </div>
          <div className={cx("volume-wrapper")}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volumeWater}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolumeWater(newVolume);
                if (soundWater) {
                  soundWater.volume = newVolume;
                  if (newVolume === 0) {
                    soundWater.pause();
                  } else {
                    soundWater.play();
                  }
                }
              }}
              className={cx("slider")}
              orient="vertical"
            />
            <label>River</label>
          </div>
          <div className={cx("volume-wrapper")}>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volumeWind}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolumeWind(newVolume);
                if (soundWind) {
                  soundWind.volume = newVolume;
                  if (newVolume === 0) {
                    soundWind.pause();
                  } else {
                    soundWind.play();
                  }
                }
              }}
              className={cx("slider")}
              orient="vertical"
            />
            <label>wind</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
