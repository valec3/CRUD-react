import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="bg-slate-500 p-4  text-white">
            <Link to={"/people"}>
                <h1 className="font-bold p-2 text-center border-b-2 mb-4">CRUD App</h1>
            </Link>
            <div className="flex gap-5">
                <Link className="hover:text-black font-bold " to={"person-create"}>Crear usuario</Link>
                <Link className="hover:text-black font-bold " to="/people" >Facultades</Link>   
                <Link className="hover:text-black font-bold " to="/programs" >Programas</Link>   
                <Link className="hover:text-black font-bold " to="/reporte" >Reporte</Link>
            </div>
        </div>
    )
}

export default Navigation   