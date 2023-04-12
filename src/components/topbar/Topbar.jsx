import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">digital scale</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="userTitleContainer">
            <Link to="/login">
              <button className="logout">Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
