import "../style/Navbar.css";
import { BsMusicPlayerFill } from "react-icons/bs";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiRadioFill } from "react-icons/ri";
import { FaMusic } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import { GiLoveSong } from "react-icons/gi";
import { TbFileLike } from "react-icons/tb";
// import { GiLoveSong } from "react-icons/gi";

const Navbar = () => {
  const menuBrowser = [
    {
      title: "Discover",
      icon: <BsMusicPlayerFill />,
    },
    {
      title: "Personal",
      icon: <BsFillPersonBadgeFill />,
    },
    {
      title: "New Release",
      icon: <FaMusic />,
    },
    {
      title: "Popular",
      icon: <BsMusicNoteList />,
    },
    {
      title: "Charts",
      icon: <AiOutlineBarChart />,
    },
    {
      title: "Radio",
      icon: <RiRadioFill />,
    },
  ];
  const menuLibrary = [
    {
      title: "Likes",
      icon: <TbFileLike  />,
    },
    {
      title: "Playlists",
      icon: <BsMusicNoteList />,
    },
    {
      title: "Songs",
      icon: <GiLoveSong />,
    },

  ];
  return (
    <div className="navbar">
      <div className="nav-bar">
        <div className="nav-title">Browser</div>
        {menuBrowser.map((browser) => {
          return (
            <div className="nav-item">
              <div className="menu-icon">
                {browser.icon}
              </div>

              {browser.title}
            </div>
          );
        })}
      </div>
      <div className="nav-bar">
        <div className="nav-title">Library </div>
        {menuLibrary.map((library) => {
          return (
            <div className="nav-item">
              <div className="menu-icon">
                {library.icon}
              </div>

              {library.title}
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default Navbar;
