import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllOfStaff from './Pages/All_of_Staff/All_of_Staff';
import Department from './Pages/Departments/Departments';
import AddStaff from './Pages/All_of_Staff/AddStaff';
import AddDepartments from './Pages/Departments/AddDepartments';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allofstaff" element={<AllOfStaff />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/addstaff" element={<AddStaff />} />
        <Route path="/adddepartments" element={<AddDepartments />} />
      </Routes>
    </div>
  );
}

export default App;