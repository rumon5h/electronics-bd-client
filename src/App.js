import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <Home/>
     <Routes>
      <Route path='/' element={Home}></Route>
     </Routes>
    </div>
  );
}

export default App;
