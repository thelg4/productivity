import logo from './logo.svg';
import HomePage from './pages/HomePage';
import Charts from './pages/Charts';
import './App.css';
import {
  BrowserRouter, 
  Routes, 
  Route, 
} from 'react-router-dom';



function App() {
  return (
    

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Charts' element={<Charts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
