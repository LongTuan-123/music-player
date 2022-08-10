import "../style/Navbar.css";
import { BsMusicPlayerFill } from "react-icons/bs";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { GrLineChart } from "react-icons/gr";
import { RiRadioFill } from "react-icons/ri";
import { FaMusic } from "react-icons/fa";
import {  } from "react-icons/gr";




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
      icon: <BsMusicPlayerFill />,
    },
    {
      title: "Charts",
      icon: <GrLineChart />,
    },
    {
      title: "Radio",
      icon: <RiRadioFill />,
    },
  ];
  const menuLibrary = [
    {
      title: "Likes",
    },
    {
      title: "Playlists",
    },
    {
      title: "Songs",
    },
    {
      title: "Discover",
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
        <div className="nav-title">Library</div>
        {menuLibrary.map((library) => {
          return <div className="nav-item">{library.title}</div>;
        })}
      </div>
    </div>
  );
};
export default Navbar;
