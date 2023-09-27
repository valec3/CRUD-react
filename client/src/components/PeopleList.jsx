import { useEffect, useState } from "react"
import { getAllPersons } from "../api/person.api"
import {PersonCard,Buttons} from "./"

const PeopleList = () => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        async function loadPeople() {
            const res= await getAllPersons()
            console.log(res)
            setPeople(res.data)
        }
        loadPeople()
    }, [])
    return (
        <div className="p-3">
            <div className="grid grid-cols-4 font-bold text-xl">
                <h4>Nro</h4>
                <h4>Nombre</h4>
                <h4>Email</h4>
            </div>
            {
                people.map((person,index) => 
                    <PersonCard key={person.id} person={person} idx={index}/>
                )
            }
            <div>
                <Buttons/>
            </div>
        </div>
    )
}

export default PeopleList