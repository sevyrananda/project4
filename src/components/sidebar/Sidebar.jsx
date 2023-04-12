import "./sidebar.css";
import {
  Dashboard,
  PermIdentity,
  Input,
  Edit,
  Done,
  DoneAll,
  FitnessCenter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Dashboard className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Page Admin</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Data User
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Page Petugas</h3>
          <ul className="sidebarList">
            <Link to="" className="link">
              <li className="sidebarListItem">
                <FitnessCenter className="sidebarIcon" />
                Timbang Truk
              </li>
            </Link>
            <Link to="/edit" className="link">
              <li className="sidebarListItem">
                <Edit className="sidebarIcon" />
                Edit Data
              </li>
            </Link>
            <Link to="/inputmanual" className="link">
              <li className="sidebarListItem">
                <Input className="sidebarIcon" />
                Input Manual
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Page Koordinator</h3>
          <ul className="sidebarList">
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Done className="sidebarIcon" />
                Verifikasi
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Page Supervisor</h3>
          <ul className="sidebarList">
            <Link to="/approves" className="link">
              <li className="sidebarListItem">
                <DoneAll className="sidebarIcon" />
                Approval
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Page Owner</h3>
          <ul className="sidebarList">
            <Link to="/rekaplaporan" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Hasil Rekap
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
