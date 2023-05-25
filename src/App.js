
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.css"
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";

function App() {

  const user = true;
  return (
    <BrowserRouter>
    <div>
    <Navbar user={user}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={user ?<Navigate to="/"/>:<Login/>}/>
      <Route path="/post/:id" element={user ? <Post/>:<Navigate to="/"/>}/>

      
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
