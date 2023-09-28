
import './App.css'
import { BrowserRouter, Routes,Route} from "react-router-dom"
import {Landing,FacultadForm,Facultades,Programas} from './pages'
import {Navigation} from './components'

function App() {

  return (
      <BrowserRouter>
        <div className='h-screen flex flex-col '>
            <Navigation/>
            <main className='p-4 px-10 '>
              <Routes>
                <Route path="/reporte" element={<Landing/>}/>
                <Route path="/fac-create" element={<FacultadForm/>}/>
                <Route path="/facultades" element={<Facultades/>}/>
                <Route path="/facultad/:id" element={<FacultadForm/>}/>
                <Route path="/programas" element={<Programas/>}/>
                <Route path="/programa/:id" element={<FacultadForm/>}/>
              </Routes>
            </main>
        </div>
      </BrowserRouter>
  )
}

export default App
