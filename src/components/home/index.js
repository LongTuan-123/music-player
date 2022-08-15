import "../style/Home.css";
import Layout from "../layout/Layout";
import axios from "axios";
import { useEffect, useState, createContext } from "react";
import "../style/GlobleStyle.css";
import PlayIcon from "../../assets/icon/PlayIcon";

export const indexContext = createContext();

const Home = () => {
  const [musicData, setMusicData] = useState([]);
  const [audioIndex, setAudioIndex] = useState(0);
  useEffect(() => {
    axios
      .get("https://62ee3678f5521ecad5711e3e.mockapi.io/songs")
      .then((res) => {
        setMusicData(res?.data);
      });
  }, []);
  
  return (
    <indexContext.Provider value={audioIndex}>
      <Layout>
        <div className="home">
          <div className="list-song">
            <div className="list-song-title">List songs</div>
            {musicData.map((songs) => {
              return (
                <div
                  className="song-item"
                  onClick={() => {
                    setAudioIndex(songs.id);
                  }}
                >
                  <div className="row">
                    <div className="song-img">
                      <img src={songs?.image} />
                      <div className="song-play-icon">
                        <PlayIcon />
                      </div>
                    </div>
                    <div className="col">
                      <div className="song-name">{songs?.name}</div>
                      <div className="singer-name">{songs?.singer}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="playlist"></div>
          <div className="recommend"></div>
          <div className="album"></div>
          <div className="mv"></div>
        </div>
      </Layout>
    </indexContext.Provider>
  );
};
export default Home;
