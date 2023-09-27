
import { Link } from "react-router-dom"

const Buttons = () => {
    return (
        <div className="mt-5">
            <Link 
                className="py-2 px-4 mx-1 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600" 
                to='/fac-create'
            >
                    Crear
            </Link>
            <Link 
                className="py-2 px-4 mx-1 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600" 
                to='fac-delete'
            >
                    Borrar
            </Link>
            <Link 
                className="btn" 
                to='fac-update'
            >
                    Update
            </Link>
        </div>
    )
}

export default Buttons