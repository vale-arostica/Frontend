import "./perfil.scss";
import Single from "../../components/single/Single";

const Perfil = () => {

    //!fetch data from api and set to Single component

    return(
        <div className="perfil">
            <Single {...singleUser}/>
        </div>
    )
}

export default Perfil;