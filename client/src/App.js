import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Form from "./views/form/Form";
import Landing from "./views/landing/Landing";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Confirmation from "./components/confirmation/Confirmation";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
        <Route path="/exito" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
