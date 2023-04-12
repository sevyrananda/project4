import "./inputManual.css";

export default function inputManual() {
  return (
    <div className="inputManual">
      <div className="inputManualTitleContainer">
        <h1 className="inputManualTitle">Input Manual</h1>
      </div>
      <div className="inputManualContainer">
        <div className="inputManualUpdate">
          <form className="inputManualUpdateForm">
            <div className="inputManualUpdateLeft">
              <div className="inputManualUpdateItem">
                <label>Nomor Plat</label>
                <input
                  type="text"
                  placeholder="Masukkan nomor plat"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Berat Total</label>
                <input
                  type="text"
                  placeholder="Masukkan berat total"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Berat Kosong</label>
                <input
                  type="text"
                  placeholder="Masukkan Berat Kosong"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Berat Muatan</label>
                <input
                  type="text"
                  placeholder="Masukkan Berat Muatan"
                  className="inputManualUpdateInput"
                />
              </div>
              <div className="inputManualUpdateItem">
                <label>Jenis Muatan</label>
                <input
                  type="text"
                  placeholder="Masukkan Jenis Muatan"
                  className="inputManualUpdateInput"
                />
              </div>
            </div>
            <div className="inputManualUpdateRight">
              <button className="inputManualUpdateButton">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
