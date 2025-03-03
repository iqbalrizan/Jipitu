
import { Route, Router, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Homepage';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/>} />
      </Routes>
    </>
  )
}

export default App


























