import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createPerson,deletePerson,updatePerson,getPerson } from "../api/person.api"
import { useNavigate,useParams } from "react-router-dom"


const PersonFormPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {register,handleSubmit,formState:{errors}}= useForm()

    const handleOnSubmit = handleSubmit(async (data)=>{
        console.log(data);
        if (params.id) {
            updatePerson(params.id,data);
        }else{
            await createPerson(data);
        }
        navigate("/people");
    });

    const handleDeletePerson = async ()=>{
        const accept = window.confirm("Estas seguro de eliminar este usuario?")
        if(accept){
            deletePerson(params.id);
            navigate("/people");
        }
    }
    const handleUpdate = async ()=>{
        const accept = window.confirm("Estas seguro de actualizar este usuario?")
        if(accept){
            updatePerson(params.id);
            navigate("/people");
        }
    }

    useEffect(()=>{
        async function loadPerson(){  
            if(params.id){
                const res = await getPerson(params.id)
                console.log(res);
            }
        }
        loadPerson();
    },[params.id])

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="" id="" placeholder="name" {...register("name",{required:false})} />
                {
                    errors.name && <span>El nombre es requerido</span>
                }
                <input type="number" name="" id="" placeholder="edad" {...register("edad",{required:false})} />
                {
                    errors.edad && <span>El nombre es requerido</span>
                }
                <input type="email" name="" id="" placeholder="correo" {...register("email",{required:false})} />
                <input type="number" name="" id="" placeholder="phone" {...register("phone",{required:false})} />
                <input type="number" name="" id="" placeholder="insulina" {...register("insulina",{required:false})} />
                <input type="number" name="" id="" placeholder="glucosa" {...register("glucosa",{required:false})} />
                <input type="number" name="" id="" placeholder="peso" {...register("peso",{required:false})} />
                <input type="number" name="" id="" placeholder="presion" {...register("presion",{required:false})} />
                <input type="text" name="" id="" placeholder="diagnostico" {...register("diagnostico",{required:false})} />
                <button className="py-2 px-4 rounded-md bg-slate-500 text-white font-bold">Save</button>
            </form>
            {
                params.id && <button 
                                className="py-2 px-4 mx-1 rounded-md bg-slate-500 text-white font-bold" 
                                onClick={handleDeletePerson}>
                                    Delete
                            </button>
            }
            {
                params.id && <button 
                                className="py-2 px-4 mx-1 rounded-md bg-slate-500 text-white font-bold" 
                                onClick={handleUpdate}>
                                    Update
                            </button>
            }
        </div>
    )
}

export default PersonFormPage