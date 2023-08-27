import "./dataTable.scss";
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Porps = {
  columns: GridColDef[];
  rows: object[];
  slug:string;
};


const DataTable = (porps:Porps) => {

  const handleDelete = (id:number) => {
    console.log(id);
  }

  const actionColumn:GridColDef = {
      field: "acciones", headerName: "Acciones", width: 150,
      renderCell: (params) => {
        return <div className="action">
          <Link to={`/${porps.slug}/${params.row.id}`}>
          <img src="pen.svg"/> 
          </Link>

          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="delete.svg"/>
          </div>
        </div>
      }
  }


  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={porps.rows}
        columns={[...porps.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar:{
            showQuickFilter: true,
            quickFilterProps:{debounceMs: 500},
          }
        }}
        pageSizeOptions={[5]}
        //checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnFilter
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
