import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllOfStaff from './Pages/All_of_Staff/All_of_Staff';
import Department from './Pages/Departments/Departments';
import AddDepartments from './Pages/Departments/AddDepartments';
import ContractStaff from './Pages/Contracts/ContractStaff';
import StepsStaff from './Pages/All_of_Staff/StepsStaff';
import MyContract from './Pages/Contracts/MyContract';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/allofstaff" element={<AllOfStaff />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/adddepartments" element={<AddDepartments />} />
        <Route path="/contractstaff" element={<ContractStaff />} />
        <Route path="/stepStaff" element={<StepsStaff />} />
        <Route path="/mycontract" element={<MyContract />} />
      </Routes>
    </div>
  );
}

export default App;