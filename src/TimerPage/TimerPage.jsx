import React from "react";
import "../sass/styles.scss";
import StopBtn from "../svg/StopBtn.svg";
import PlayBtn from "../svg/PlayBtn.svg";
import PauseBtn from "../svg/PauseBtn.svg";

function TimerPage(props) {
  return (
    <div className="timer-page">
      <h2 className="header-secondary">Stopwatch</h2>
      <span className="timer-page__time-wrapper">
        <h1 className="header-primary">00:00:00</h1>
      </span>
      <div className="timer-page__btns">
        <span className="timer-page__btn-wrapper1">
          <img className="stop-btn" src={StopBtn} alt="stop" />
        </span>
        <span className="timer-page__btn-wrapper2">
          <img className="play-btn" src={PlayBtn} alt="stop" />
          <img className="pause-btn" src={PauseBtn} alt="stop" />
        </span>
      </div>
    </div>
  );
}

export default TimerPage;
