import React from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'

export default function ProductList() {
  const [data] = useState(productRows);

  const history = useHistory();

        const handleCellButtonClick = (id) => {
          Swal.fire({
            title: 'Do you want to approve this data?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              history.push("/approved/" + id);
            } else if (result.isDenied) {
              Swal.fire('The data has not been approved', '', 'warning')
            }
          })
        }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "tanggal", headerName: "Tanggal", width: 150 },
    { field: "jam", headerName: "Jam", width: 150 },
    {
      field: "plat",
      headerName: "Plat Nomor",
      width: 150,
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
              <button className="productListEdit" onClick={() => handleCellButtonClick(params.row.id)}>Give Verif</button>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <h2>Halaman Verifikasi</h2>
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
