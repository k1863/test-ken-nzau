import React, { useState, useRef } from "react";
import "../sass/styles.scss";
import StopBtn from "../svg/StopBtn.svg";
import PlayBtn from "../svg/PlayBtn.svg";
import ResumeBtn from "../svg/ResumeBtn.svg";
import PauseBtn from "../svg/PauseBtn.svg";
import useTimer from "../utils/useTimer.js";
import { formatTime } from "../utils/utils.js";

function TimerPage(props) {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <div className="timer-page">
      <h2 className="header-secondary">Stopwatch</h2>
      <span className="timer-page__time-wrapper">
        <h1 className="header-primary">{formatTime(timer)}</h1>
      </span>
      <div className="timer-page__btns">
        <span className="timer-page__btn-wrapper1">
          <img
            className="stop-btn"
            onClick={handleReset}
            src={StopBtn}
            alt="stop"
            disabled={!isActive}
          />
        </span>
        <span className="timer-page__btn-wrapper2">
          {!isActive && !isPaused ? (
            <img
              className="play-btn"
              onClick={handleStart}
              src={PlayBtn}
              alt="stop"
            />
          ) : isPaused ? (
            <img
              className="pause-btn"
              onClick={handlePause}
              src={PauseBtn}
              alt="pause"
            />
          ) : (
            <img
              className="pause-btn"
              onClick={handleResume}
              src={ResumeBtn}
              alt="resume"
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default TimerPage;
