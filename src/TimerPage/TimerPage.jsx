import React from "react";
import "../sass/styles.scss";
import StopBtn from "../svg/StopBtn.svg";
import PlayBtn from "../svg/PlayBtn.svg";
import ResumeBtn from "../svg/ResumeBtn.svg";
import PauseBtn from "../svg/PauseBtn.svg";
import useTimer from "../utils/useTimer.js";
import { formatTime } from "../utils/utils.js";
import Particles from "react-particles-js";
import { params } from "./particlesParams";

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
      <Particles params={params} />
      <h2 className="timer-page__header">Stopwatch</h2>
      <div className="stop-shaking">
        <div className="timer-page__time-wrapper">
          <h1 className="timer-page__time">{formatTime(timer)}</h1>
        </div>
      </div>

      <div className="timer-page__btns">
        <img
          className="stop-btn"
          onClick={handleReset}
          src={StopBtn}
          alt="stop"
          disabled={!isActive}
        />

        <div className="timer-page__btn-wrapper2">
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
              className="resume-btn"
              onClick={handleResume}
              src={ResumeBtn}
              alt="resume"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TimerPage;
