import Create from '../components/Create'
import Home from '../components/Home'
import Update from '../components/Update';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
     <BrowserRouter>
     {/* <Home />
    <Create /> */}
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/update/:id' element={<Update />}/>
       </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
