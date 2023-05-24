import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone} from "@material-ui/icons";
import "./Dropdown";
import DropDownProfile from "./Dropdown";
import foto from './assets/petugas.png';

const Topbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Digital Scale</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <img src={foto} alt="" className="topAvatar" onClick={() => setOpenProfile((prev) => !prev)} />
          {
            openProfile && <DropDownProfile />
          }
        </div>
      </div>
    </div>
  );
}

export default Topbar;
