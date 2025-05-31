import classNames from "classnames/bind";

import styles from "./Pomodoro.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Pomodoro({ isOpen, onClose }) {
  const [timer, setTimer] = useState(1500);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60; // mặc định 25 phút (1500 giây)
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");
  const [intervalId, setIntervalId] = useState(null);

  // useEffect(() => {
  //   if (mode === "work") {
  //     setTimer(25 * 60);
  //   } else {
  //     setTimer(5 * 60);
  //   }
  // }, [mode]);
  if (!isOpen) return null;

  const formatTime = (time) => {
    return String(time).padStart(2, "0");
  };

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTimer((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(id);
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    if (mode === "work") {
      setTimer(25 * 60);
    } else {
      setTimer(5 * 60);
    }
  };

  const handleSetMode = (selectedMode) => {
    setMode(selectedMode);
    handleReset();
  };

  return (
    <div className={cx("pomodoro-modal")}>
      <div className={cx("pomodoro-header")}>
        <h2>Pomodoro Timer</h2>
        <button className={cx("close-button")} onClick={onClose}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>

      <div className={cx("timer-display")}>
        <span>
          <span>
            {formatTime(minutes)}:{formatTime(seconds)}
          </span>
        </span>
      </div>

      <div className={cx("timer-controls")}>
        <button onClick={handleStart} className={cx("btn", "start")}>
          Start
        </button>
        <button onClick={handlePause} className={cx("btn", "pause")}>
          Pause
        </button>
        <button onClick={handleReset} className={cx("btn", "reset")}>
          Reset
        </button>
      </div>

      <div className={cx("mode-select")}>
        <button
          onClick={() => setMode("work")}
          className={cx({ active: mode === "work" })}
        >
          Work
        </button>
        <button
          onClick={() => setMode("break")}
          className={cx({ active: mode === "break" })}
        >
          Break
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
