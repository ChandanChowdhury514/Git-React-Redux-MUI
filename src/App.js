
import './App.css';
import {Routes, Route} from 'react-router-dom';
//import Home from './pages/Home';
// AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

import ViewEmp from './pages/ViewEmp';
import AddEmployee from './pages/AddEmployee';
function App() {
  return (
    <div className="App">

       <Routes>
      <Route  exact  path="/" element={<ViewEmp/>}/>
       <Route  exact  path="/addUser" element={<AddEmployee/>}/> 
      <Route  exact  path="/editUser:id" element={<EditUser/>}/>
      </Routes> 
      {/* <Home /> */}
    
    
    </div>
    
  );
}

export default App;
