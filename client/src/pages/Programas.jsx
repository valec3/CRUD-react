import { useEffect, useState } from "react"
import { getAllProgramas,deletePrograma } from "../api/person.api"
import {ProgramaCard} from "../components"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

const Programas = () => {
    const [programas, setProgramas] = useState([]);
    const navigate = useNavigate()

    const showNotification = (estado)=>{
        const message = `Programa ${estado} exitosamente`
        toast.success(message,{
            position:"top-right",
            style:{
                backgroundColor:"#4BB543",
                color:"#fff",
                fontWeight:"bold",
                padding:"10px"
            },
            iconTheme:{
                primary:"#fff",
                secondary:"#4BB543"
            },
            duration:3000,
            
        })
    }

    const handleDelete = async (id) => {
        deletePrograma(id);
        const newProgramas = programas.filter((programa) => programa.programa_id !== id)
        setProgramas(newProgramas)
        showNotification("eliminada")
    }

    useEffect(() => {
        const fetchProgramas = async () => {
            const {data} = await getAllProgramas()
            setProgramas(data)
        }
        fetchProgramas()
    }, [])


    return (
        <div className="p-3 bg-[#f5f5f5]">
            <h2 className="text-4xl text-blue-300 font-bold py-2 text-center">Programas</h2>
            <div className="grid grid-cols-6 font-bold text-xl bg-blue-300 w-full py-4 px-2">
                <h4>Programa id</h4>
                <h4>Facultad id</h4>
                <h4>Nombre</h4>
                <h4>Cod programa</h4>
                <h4>Tipo</h4>
            </div>
            <div className="overflow-auto h-[570px] scroll">
                {
                    programas.map((programa,index) => 
                        <ProgramaCard key={programa.programa_id} programa={programa} idx={index} handleDelete={handleDelete}/>
                    )
                }
            </div>
            <div className="mt-5">
                <button className="py-2 px-4 text-xl uppercase mx-1 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600" onClick={()=>navigate('/pro-create')}>Crear</button>
            </div>
        </div>
    )
}

export default Programas