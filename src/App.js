import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {MyNavbar} from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Homepage/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import TaskManager from './Pages/TaskManager/TaskManager';
import Join from './Pages/Join/Join';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Achievements from './Pages/Achivements/Achievements';
import Goals from './Pages/Goals/Goals';
import Routines from './Pages/Routines/Routines';
import GoalTasks from './Pages/GoalTasks/GoalTasks';
import RoutineTasks from './Pages/RoutineTasks/RoutineTasks';
import GoalDetails from './Pages/Goals/GoalDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/TaskManager' element={<TaskManager />}></Route>
          <Route path='/JoinGoals' element={<Join />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Achievements' element={<Achievements />}></Route>
          <Route path='/Goals' element={<Goals />}></Route>
          <Route path='/Routines' element={<Routines />}></Route>
          <Route path='/GoalDetails' element={<GoalDetails/>}></Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
