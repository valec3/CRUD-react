import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createPerson,updatePerson,getPerson } from "../api/person.api"
import { useNavigate,useParams } from "react-router-dom"


const FacultadForm = () => {
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
        <div className="flex flex-col bg-blue-400 p-5 px-10 border rounded-xl m-10">
            <form onSubmit={handleOnSubmit} className="grid grid-cols-2 gap-4">
                <div className="cell">
                    <label htmlFor="" className="lbl">Nombre:</label>
                    <input className="input" type="text" name="" id=""  {...register("name",{required:false})} />
                </div>
                <div className="cell">
                    <label htmlFor="" className="lbl">Edad:</label>
                    <input className="input" type="number" name="" id=""  {...register("edad",{required:false})} />
                </div>
                <div className="cell">
                    <label htmlFor="" className="lbl">Email:</label>
                    <input className="input" type="email" name="" id=""  {...register("email",{required:false})} />
                </div>
                <div className="cell">
                    <label htmlFor="" className="lbl">Numero:</label>
                    <input className="input" type="number" name="" id=""  {...register("phone",{required:false})} />
                </div>
                <button className="btn">Save</button>
            </form>
            {
                params.id && <button 
                                className="btn" 
                                onClick={handleUpdate}>
                                    Update
                            </button>
            }
        </div>
    )
}

export default FacultadForm