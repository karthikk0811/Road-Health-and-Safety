import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth';
import Detection from './Components/Detection';

function App() {
  return (
    <>
    {/* <Register/> */}
    {/* <Login/> */}
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route element={<RequireAuth/>}>
        <Route path='/' element={<Detection/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
