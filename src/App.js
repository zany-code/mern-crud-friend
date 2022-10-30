import AddFriend from "./component/AddFriend";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditFriend from "./component/EditFriend";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='add-mhs' element={<AddFriend/>}/>
      <Route path='edit-mhs/:id' element={<EditFriend/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
