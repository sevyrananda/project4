import "./approvedList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useState } from "react";

export default function ApproveList() {
  const [data] = useState(productRows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "tanggal", headerName: "Tanggal", width: 150 },
    { field: "jam", headerName: "Jam", width: 120 },
    {
      field: "plat",
      headerName: "Plat Nomor",
      width: 160,
    },
    {
      field: "berat",
      headerName: "Berat",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <>
              <h5 className="approveListBtn">Approved</h5>
          </>
        );
      },
    },
  ];

  return (
    <div className="approveList">
      <h2>Halaman Yang Sudah Di verifikasi</h2>
      <br></br>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
