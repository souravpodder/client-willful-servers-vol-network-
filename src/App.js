import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './components/AddEvent/AddEvent';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import RegisteredWorks from './components/RegisteredWorks/RegisteredWorks';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/register/:workId' element={
          <RequireAuth>

            <RegisterVolunteer />
          </RequireAuth>
        }></Route>
        <Route path='/registeredworks' element={<RegisteredWorks />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/add' element={<AddEvent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
