import { Route, Routes } from 'react-router-dom';
import Footer from './pages/Home/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar';
import LogIn from './pages/Signin/LogIn';
import SignUp from './pages/Signin/SignUp';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>

     </Routes>
     
     <Footer/>
     <Toaster/>
    </div>
  );
}

export default App;
