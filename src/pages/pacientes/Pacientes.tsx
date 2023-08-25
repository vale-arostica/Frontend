import "./Pacientes.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { useState } from "react";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "avatar", headerName: "Avatar", width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" className="avatares"/>
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

//ESTO NO DEBERÍA IR PORQUE rows DEBERÍA OBTENERLO CON FETCH
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Pacientes = () => {
  const [open, setOpen] = useState(false);
  return (
  <div className="pacientes">
    <div className="info">
      <h1>Pacientes</h1>
      <button onClick={()=>setOpen(true)}><span className="plus-icon">+</span> Agregar paciente</button>
    </div>
    <DataTable slug="pacientes" columns={columns} rows={rows}/>
    {open && <Add slug="paciente" columns={columns} setOpen={setOpen}/>}
  </div>
  );
};

export default Pacientes;
