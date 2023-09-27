
import './App.css'
import { BrowserRouter, Routes,Route} from "react-router-dom"
import {PeoplePage, PersonFormPage,Landing,FacultadForm} from './pages'
import {Navigation} from './components'

function App() {

  return (
      <BrowserRouter>
        <div className='min-h-screen flex flex-col'>
            <Navigation/>
            <Routes>
              <Route path="/reporte" element={<Landing/>}/>
              <Route path="/people" element={<PeoplePage/>}/>
              <Route path="/person-create" element={<PersonFormPage/>}/>
              <Route path="/person/:id" element={<PersonFormPage/>}/>
              <Route path="/fac-create" element={<FacultadForm/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
