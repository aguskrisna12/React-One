import './App.css';
import Movie from './Component/Movie/index';
import Navbar from './Component/Navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/movie' element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
