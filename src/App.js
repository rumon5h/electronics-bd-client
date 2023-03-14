import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Home/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={Home}></Route>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
