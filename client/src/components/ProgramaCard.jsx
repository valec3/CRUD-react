/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
const ProgramaCard = ({
        programa,
        handleDelete
    }) => {
    const navigate = useNavigate()
    const updateBtn = ()=>{
        navigate(`/programa/${programa.programa_id}`)
        console.log("update");
    }
    const deleteBtn = ()=>{
        window.confirm("¿Está seguro que desea borrar el programa?")
        if (window.confirm)
            handleDelete(programa.programa_id)
        console.log("delete");
    }

    return (
        <div>
            <div className="grid grid-cols-6 items-center border-b-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer py-2" >
                <h4>{programa.programa_id}</h4>
                <h4>{programa.facultad_id}</h4>
                <h4>{programa.nombre}</h4>
                <h4>{programa.cod_programa}</h4>
                <h4>{programa.tipo}</h4>
                <div>
                    <button className="btn" onClick={deleteBtn}>Borrar</button>
                    <button className="btn" onClick={updateBtn}>Actualizar</button>
                </div>
            </div>
        </div>
    )
}

export default ProgramaCard