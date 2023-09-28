import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createPrograma,updatePrograma,getPrograma } from "../api/person.api"
import { useNavigate,useParams } from "react-router-dom"
import { toast } from "react-hot-toast"

const ProgramaForm = () => {

    const navigate = useNavigate()
    const params = useParams()
    const {register,handleSubmit,formState:{errors},setValue}= useForm()

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
    const handleOnSubmit = handleSubmit(async (data)=>{
        console.log(data);
        if (params.id) {
            updatePrograma(params.id,data);
            showNotification("actualizado")
        }else{
            createPrograma(data);
            showNotification("creado")
            // actualizar pagina
        }
        navigate("/programas");
    });
    useEffect(()=>{
        async function loadFacultad(){  
            if(params.id){
                const {data} = await getPrograma(params.id)
                console.log(data);
                setValue("programa_id",data.facultad_id)
                setValue("facultad_id",data.facultad_id)
                setValue("nombre",data.nombre)
                setValue("cod_programa",data.cod_programa)
                setValue("tipo",data.tipo)
            }
        }
        loadFacultad();
    },[params.id])

    return (
        <div>
            <div className="flex flex-col bg-slate-400 p-5 px-10 border rounded-xl m-10">
                <h2 className="text-4xl text-white font-bold py-2 pb-6">Crear programa</h2>
                <form onSubmit={handleOnSubmit} className="grid grid-cols-2 gap-4 items-center">
                    <div className="cell">
                        <label htmlFor="" className="lbl">Id Programa:</label>
                        <input className={`input ${params.id ? 'input-disabled':''}`} type="number" name="" id="" {...(params.id ? { disabled: true } : null)} {...register("programa_id",{required:false})} />
                        {errors.programa_id && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Id Facultad:</label>
                        <input className={`input`} type="number" name="" id="" {...register("facultad_id",{required:false})} />
                        {errors.facultad_id && <span className="text-red-500">Este campo es requerido</span>}
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Nombre:</label>
                        <input className="input" type="text" name="" id="" {...register("nombre",{required:false})} />
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Código Programa:</label>
                        <input className="input" type="text" name="" id="" {...register("cod_programa",{required:false})} />
                    </div>
                    <div className="cell">
                        <label htmlFor="" className="lbl">Tipo:</label>
                        <input className="input" type="text" name="" id="" {...register("tipo",{tipo:false})} />
                    </div>
                    <div className="mt-2 flex items-end h-full">
                        {
                            params.id?
                                <button className="btn">Actualizar</button>
                                : <button className="btn">Crear</button>
                        }
                    </div>
                </form>
            
            </div>
        </div>
    )
}

export default ProgramaForm