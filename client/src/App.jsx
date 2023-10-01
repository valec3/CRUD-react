
import './App.css'
import { BrowserRouter, Routes,Route, Navigate} from "react-router-dom"
import {Landing,FacultadForm,Facultades,Programas,ProgramaForm} from './pages'
import {Navigation} from './components'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
      <BrowserRouter>
        <div className='h-screen flex flex-col '>
            <Navigation/>
            <main className='p-4 px-10 '>
              <Routes>
                <Route path="/" element={<Navigate to='/reporte'/>}/>
                <Route path="/reporte" element={<Landing/>}/>
                <Route path="/fac-create" element={<FacultadForm/>}/>
                <Route path="/pro-create/:id" element={<ProgramaForm/>}/>
                <Route path="/pro-create" element={<ProgramaForm/>}/>
                <Route path="/facultades" element={<Facultades/>}/>
                <Route path="/facultad/:id" element={<FacultadForm/>}/>
                <Route path="/programas" element={<Programas/>}/>
                <Route path="/programa/:id" element={<ProgramaForm/>}/>
              </Routes>
            </main>
            <Toaster/>
        </div>
      </BrowserRouter>
  )
}

export default App
