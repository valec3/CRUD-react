/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { deletePerson } from "../api/person.api"

function PersonCard({person,idx}) {

    const navigate = useNavigate()
    const handleDeletePerson = async (id)=>{
        const accept = window.confirm("Estas seguro de eliminar este usuario?")
        if(accept){
            deletePerson(id);
        }
    }
    const handleUpdate = (id)=>{
        navigate(`/person/${id}`)
    }
    return (
        <div 
            key={person.id} 
            
            className="grid grid-cols-4 border-b-[1px] border-slate-400 hover:bg-slate-100 cursor-pointer py-2"
        >
            <p>
                {idx+1}
            </p>
            <p>
                {person.name}
            </p>
            <p>
                {person.email}
            </p>
            <div>
                <button className="btn" onClick={()=>{handleDeletePerson(person.id)}}>Borrar</button>
                <button className="btn" onClick={()=>{handleUpdate(person.id)}}>Actualizar</button>
            </div>
        </div>
    )
}

export default PersonCard