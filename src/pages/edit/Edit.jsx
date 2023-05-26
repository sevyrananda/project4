import React from "react";
import {
  Alarm,
  CalendarToday,
  Commute,
  FitnessCenter,
  VerifiedUser,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./edit.css";
import Swal from 'sweetalert2';

export default function Edit() {
  const handleCellButtonClick = () => {
    Swal.fire({
      position: 'top-bottom',
      icon: 'success',
      title: 'Data has been updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h2 className="userTitle">Edit Data Timbang</h2>
        <Link to="/inputmanual">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowBottom">
            <span className="userShowTitle">Detail Data</span>
            <div className="userShowInfo">
              <VerifiedUser className="userShowIcon" />
              <span className="userShowInfoTitle">ID Truk : 1 </span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">Tanggal : 08/09/2023 </span>
            </div>
            <div className="userShowInfo">
              <Alarm className="userShowIcon" />
              <span className="userShowInfoTitle">Jam : 9.10 </span>
            </div>
            <div className="userShowInfo">
              <Commute className="userShowIcon" />
              <span className="userShowInfoTitle">Plat Nomor : AE 123 BC</span>
            </div>
            <div className="userShowInfo">
              <FitnessCenter className="userShowIcon" />
              <span className="userShowInfoTitle">Berat : 90 Kg</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit Data</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>ID Truk</label>
                <input
                  type="text"
                  placeholder="1"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Tanggal</label>
                <input
                  type="text"
                  placeholder="08/09/2023"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Jam</label>
                <input
                  type="text"
                  placeholder="9.10"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Plat Nomor</label>
                <input
                  type="text"
                  placeholder="AE 123 BC"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Berat</label>
                <input
                  type="text"
                  placeholder="90 Kg"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <Link to= "/edits">
              <button className="userUpdateButton" onClick={() => handleCellButtonClick()}>Update</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
