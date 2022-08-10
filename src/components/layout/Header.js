import "../style/Header.css";
import { BsSearch } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Logo from "../../assets/img/Logo.png";
import Tippy from "@tippyjs/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HOME } from "../../config/path";
const Header = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 2000);
  }, []);
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">
          {/* <NavLink>
                <Link to={HOME}>
                </Link>
            </NavLink> */}
          <img src={Logo} />
        </div>
        <Tippy
          content="Tooltip"
          visible={searchResult.length > 0}
          interactive={true}
          render={(attrs) => (
            <div className="search-result" tabIndex="-1" {...attrs}>
              {/* Kết quả */}
            </div>
          )}
        >
          <div className="header-search">
            <input placeholder="Search songs by name ..."></input>
            <div className="search-btn">
              <button>
                <BsSearch />
              </button>
            </div>
          </div>
        </Tippy>
        <div className="action">
          <div className="btn-explore">Explore</div>
          <div className="btn-signup">Sign up</div>
          <div className="btn-dropmenu">
            <BiDotsHorizontalRounded />
          </div>
          <div className="btn-login">Log in</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
