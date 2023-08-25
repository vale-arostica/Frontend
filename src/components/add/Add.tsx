import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
    slug: string
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Add = (props: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //add new row
        // axios.post(`/${props.slug}`, {})

        props.setOpen(false);
    }

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>X</span>
                <h1>Agregar {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns
                    .filter(item=>item.field !== "id" && item.field !== "avatar")
                    .map((column) =>(
                        <div className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field}/>
                        </div>
                    ))}
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Add;