import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="bg-slate-500 p-4 px-10 text-white">
            <Link to={"/reporte"}>
                <h1 className="font-bold p-2 text-center border-b-2 mb-4">CRUD App</h1>
            </Link>
            <div className="flex gap-5">
                <Link className="hover:text-black font-bold " to="/facultades" >Facultades</Link>   
                <Link className="hover:text-black font-bold " to="/programas" >Programas</Link>   
                <Link className="hover:text-black font-bold " to="/reporte" >Reporte</Link>
            </div>
        </div>
    )
}

export default Navigation   