import "../style/AudioPlayer.css";
import Layout from "../layout/Layout";
import axios from "axios";
import NextIcon from "../../assets/icon/NextIcon";
import BackIcon from "../../assets/icon/BackIcon";
import PlayIcon from "../../assets/icon/PlayIcon";
import RandomPlayIcon from "../../assets/icon/RandomPlayIcon";
import ReloadIcon from "../../assets/icon/ReloadIcon";
import VolumnIcon from "../../assets/icon/VolumnIcon";
import HeartIcon from "../../assets/icon/HeartIcon";
import SettingIcon from "../../assets/icon/SettingIcon";
import PauseIcon from "../../assets/icon/PauseIcon";
import MuteIcon from "../../assets/icon/MuteIcon";
import NgoiSaoCoDon from "../../assets/music/NgoiSaoCoDon.mp3";
import Music from "../../assets/music/top10ncs.mp3";
import { AnimateKeyframes } from "react-simple-animate";
import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef();
  const cdThumbRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0.1);
  const [currentProcess, setCurrentProcess] = useState(0);
  const [musicData, setMusicData] = useState([]);
  const [audioIndex, setAudioIndex] = useState(0);
  const [isLike, setIsLike] = useState(false);
  useEffect(() => {
    axios
      .get("https://62ee3678f5521ecad5711e3e.mockapi.io/songs")
      .then((res) => {
        setMusicData(res?.data);
      });
  }, []);

  useEffect(()=>{
    setTimeout(() => {
      setCurrentTime(audioRef.current.currentTime);
      setCurrentProcess((currentTime / duration) * 100);
    }, 1000);
 
  },[])


  const handlePausePlayClick = () => {
    if (isPlaying) {
      audioRef.current.play();
      setDuration(audioRef.current.duration);
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  const handleProcess = (e) => {
    setCurrentProcess(e.target.value);
    audioRef.current.currentTime =
      (currentProcess * audioRef.current.duration) / 100;

  };
  const handleVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
    if (audioRef.current.volume === 0) {
      setIsMute(false);
    } else {
      setIsMute(true);
    }
  };
  const handleNext = () => {
    if (audioIndex < musicData.length) {
      setAudioIndex(audioIndex + 1);
    } else {
      setAudioIndex(0);
    }
  };
  const handlePrve = (e) => {
    if (audioIndex === 0) {
      setAudioIndex(musicData.length);
    } else {
      setAudioIndex(audioIndex - 1);
    }
  };
  console.log(audioIndex);

  return (
    <div className="audioPlayer">
      <div className="music-player">
        <div className="music-control-left">
          <div className="icon-control">
            <button onClick={handlePrve} className="backstep-btn">
              <BackIcon />
            </button>
          </div>

          <div className="icon-control">
            <button onClick={handlePausePlayClick} className="play-btn">
              {isPlaying ? <PlayIcon /> : <PauseIcon />}
            </button>
          </div>

          <div className="icon-control">
            <button onClick={handleNext} className="nextstep-btn">
              <NextIcon />
            </button>
          </div>
          <div className="icon-control">
            <button className="reload-btn">
              <ReloadIcon />
            </button>
          </div>
          <div className="icon-control">
            <button className="random-btn">
              <RandomPlayIcon />
            </button>
          </div>
        </div>
        <div className="music-range">
          <AnimateKeyframes
            play
            duration={5}
            keyframes={[
              "transform: rotateX(0) rotateY(0) rotateZ(0)",
              "transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)",
            ]}
            iterationCount="infinite"
          >
            <div ref={cdThumbRef} className="music-cd">
              <img src={musicData[audioIndex]?.image} />
            </div>
          </AnimateKeyframes>
          <div className="song-info">
            <marquee direction="right" className="song-name">
              {musicData[audioIndex]?.name}
            </marquee>
            <div className="singer-name">{musicData[audioIndex]?.singer}</div>
          </div>

          <input
            id="progress"
            className="progress"
            onInput={handleProcess}
            type="range"
            value={currentProcess}
            step="0.5"
            min="0"
            max="100"
          ></input>
          <audio
            id="audio"
            ref={audioRef}
            type="audio/mp3"
            // src={Music}
          >
            <source
              src="../../assets/music/NgoiSaoCoDon.mp3"
              type="audio/mpeg"
            />
          </audio>
          <div className="time-range">
            {`${Math.floor(currentTime / 60)}.${Math.floor(
              currentTime % 60,
            )}/${Math.floor(duration / 60)}.${Math.floor(duration % 60)}`}
          </div>
        </div>
        <div className="music-control-right">
          <div className="icon-control">
            <button className="volumn-btn">
              {isMute ? <VolumnIcon /> : <MuteIcon />}
            </button>
            <input
              id="volume"
              className="volume"
              type="range"
              onChange={handleVolume}
              step="0.5"
              min="0"
              max="100"
            ></input>
          </div>
          <div className="icon-control">
            <button
              onClick={() => {
                setIsLike(!isLike);
              }}
              className="heart-btn"
            >
              {isLike ? (
                <HeartIcon color="red" />
              ) : (
                <HeartIcon color="currentColor" />
              )}
            </button>
          </div>
          <div className="icon-control">
            <button className="setting-btn">
              <SettingIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
