import "./Pacientes.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef} from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { useState, useEffect } from "react";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 5 },
  {
    field: "avatar", headerName: "Avatar", width: 70,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" className="avatares"/>
    }
  },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 200,
    editable: true,
  },
  {
    field: 'fecha_nac',
    headerName: 'Fecha de nacimiento',
    type: 'date',
    width: 150,
    editable: false,
  },
  {
    field: 'genero',
    headerName: 'Género',
    type: 'string',
    width: 100,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email Apoderado',
    type: 'email',
    width: 210,
    editable: true,
  },
];

//ESTO NO DEBERÍA IR PORQUE rows DEBERÍA OBTENERLO CON FETCH

const Pacientes = () => {

  const [rows, setRows] = useState<object[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then((res) => res.json())
      .then((data) => {
        setRows(data);
        console.log(data)
      });
  }, []);


  const [open, setOpen] = useState(false);
  return (
  <div className="pacientes">
    <div className="info">
      <h1>Pacientes</h1>
      <button onClick={()=>setOpen(true)}>+ Agregar paciente</button>
    </div>
    <DataTable slug="pacientes" columns={columns} rows={rows}/>
    {open && <Add slug="paciente" columns={columns} setOpen={setOpen}/>}
  </div>
  );
};

export default Pacientes;
