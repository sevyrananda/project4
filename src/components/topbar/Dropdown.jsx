import React from "react";
import { Link } from "react-router-dom";
import {
    PermIdentity,
    ExitToApp,
  } from "@material-ui/icons";

const DropDownProfile = () => {
    return (
        <div className="flex flex col dropDownProfile">
           <ul className="dropList">
           <span className="profileName">Hi, Petugas</span>
            <Link to="/" className="link">
            <li className="dropListItem">
              <PermIdentity className="sidebarIcon" />
              Profile
            </li>
            </Link>
            <Link to="/login" className="link">
            <li className="dropListItem">
              <ExitToApp className="sidebarIcon" />
              Logout
            </li>
            </Link>
          </ul>
        </div>
    )
}

export default DropDownProfile