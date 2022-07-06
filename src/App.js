import './App.css';
import NavBar from './component/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './component/home';
import Students from './component/Student';
import Contact from './component/contact';
import Edit from './component/Edit';
import AddStudent from './component/AddStudent';
import Detail from './component/Detail';

function App() {
  return (
    <Detail>
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path="/Student" element={<Students/>}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path="/Edit/:id" element={<Edit/>}/>
      <Route path="/AddStudent" element={<AddStudent/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </Detail>
  );
}

export default App;