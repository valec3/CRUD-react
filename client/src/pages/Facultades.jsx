import { useEffect, useState } from "react"
import { getAllFacultades,deleteFacultad } from "../api/person.api"
import {FacultadCard} from "../components"
import { useNavigate } from "react-router-dom"

const Facultades = () => {
    const [facultades, setFacultades] = useState([]);
    const navigate = useNavigate()
    const handleDelete = async (id) => {
        deleteFacultad(id);
        const newFacultades = facultades.filter((facultad) => facultad.facultad_id !== id)
        setFacultades(newFacultades)
    }

    useEffect(() => {
        async function loadFacultades() {
            const res= await getAllFacultades()
            console.log('get api:',res)
            setFacultades(res.data)
        }
        loadFacultades()
    }, [])

    return (
        <div className="p-3 bg-[#f5f5f5]">
            <div className="grid grid-cols-5 font-bold text-xl gap-2">
                <h4>Id</h4>
                <h4>Nombre</h4>
                <h4>Abreviatura</h4>
                <h4>Id area</h4>
            </div>
            <div className="overflow-auto h-[630px] scroll">
                {
                    facultades.map((facultad,index) => 
                        <FacultadCard key={facultad.facultad_id} facultad={facultad} idx={index} handleDelete={handleDelete}/>
                    )
                }
            </div>
            <div className="mt-5">
                <button className="py-2 px-4 text-xl uppercase mx-1 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600" onClick={()=>navigate('/fac-create')}>Crear</button>
            </div>
        </div>
    )
}

export default Facultades