import { deletePerson,updatePerson } from "../api/person.api";

export const handleDeletePerson = async (id)=>{
    const accept = window.confirm("Estas seguro de eliminar este usuario?")
    if(accept){
        deletePerson(id);
    }
}
export const handleUpdate = async (id,navigate)=>{
    const accept = window.confirm("Estas seguro de actualizar este usuario?")
    navigate(`/person/${id}`)
    if(accept){
        updatePerson(id);
    }
}