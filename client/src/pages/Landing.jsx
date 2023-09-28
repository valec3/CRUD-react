import { useEffect, useState } from "react"
import { getDashboard } from "../api/person.api"
const Landing = () => {
    const [dashboard, setDashboard] = useState([])
    useEffect( () => {
        getDashboard().then((res) => {
            setDashboard(res.data)
        })
    }, [])
    console.log(dashboard)

    return (
        <div className="flex flex-col justify-center items-center flex-1 ">
            <h1 className="text-4xl font-bold mb-3 pb-2 border-blue-300 border-b-[2px] w-full text-center text-blue-400">Reporte</h1>
            <div>
                <div className="grid grid-cols-3 justify-center items-center font-bold text-xl bg-blue-300 w-full py-4 px-2">
                    <h4>N°</h4>
                    <h4>Abreviatura de Facultad</h4>
                    <h4>Programas</h4>
                </div>
                {dashboard.map((item) => 
                    <div key={item[0]} className="grid grid-cols-3 justify-center items-center border-b-[1px] border-blue-300 py-4 hover:bg-slate-100 cursor-pointer">
                        <p>{item[0]}</p>
                        <p>{item[1]}</p>
                        <p>{item[2]}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Landing