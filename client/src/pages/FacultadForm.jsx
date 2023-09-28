import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createFacultad,updateFacultad,getFacultad } from "../api/person.api"
import { useNavigate,useParams } from "react-router-dom"
import { toast } from "react-hot-toast"

const FacultadForm = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {register,handleSubmit,formState:{errors},setValue}= useForm()

    const handleOnSubmit = handleSubmit(async (data)=>{
        console.log(data);
        if (params.id) {
            updateFacultad(params.id,data);
            showNotification("actualizada")
        }else{
            createFacultad(data);
            showNotification("creada")
        }
        navigate("/facultades");
    });
    const showNotification = (estado)=>{
        const message = `Facultad ${estado} exitosamente`
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
            duration:10000,
            
        })
    }

    useEffect(()=>{
        async function loadFacultad(){  
            if(params.id){
                const {data} = await getFacultad(params.id)
                console.log(data);
                setValue("facultad_id",data.facultad_id)
                setValue("nombre",data.nombre)
                setValue("abreviatura",data.abreviatura)
                setValue("id_area",data.id_area)

            }
        }
        loadFacultad();
    },[params.id])

    return (
        <div className="flex flex-col bg-slate-400 p-5 px-10 border rounded-xl m-10">
            <h2 className="text-4xl text-white font-bold py-2 pb-6">{
                params.id ?'Actualizar facultad' :'Crear facultad'
            }</h2>
            <form onSubmit={handleOnSubmit} className="grid grid-cols-2 gap-4">
                <div className="cell">
                    <label htmlFor="" className="lbl">Id facultad:</label>
                    <input className={`input ${params.id ? 'input-disabled':''}`} type="number" name="" id="" {...(params.id ? { disabled: true } : null)} {...register("facultad_id",{required:false})} />
                    {errors.facultad_id && <span className="text-red-500">Este campo es requerido</span>}
                </div>
                <div className="cell">
                    <label htmlFor="" className="lbl">Nombre:</label>
                    <input className="input" type="text" name="" id="" {...register("nombre",{required:false})} />
                </div>
                <div className="cell">
                    <label htmlFor="" className="lbl">Abreviatura:</label>
                    <input className="input" type="text" name="" id="" {...register("abreviatura",{required:false})} />
                </div>
                <div className="cell">
                    <label htmlFor="" className="lbl">Id area:</label>
                    <input className="input" type="number" name="" id="" {...register("id_area",{required:false})} />
                </div>
                <div className="mt-2">
                    {
                        params.id?
                            <button className="btn">Actualizar</button>
                            : <button className="btn">Crear</button>
                    }
                </div>
            </form>
        
        </div>
    )
}

export default FacultadForm