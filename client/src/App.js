import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Form from "./views/form/Form";
import Landing from "./views/landing/Landing";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

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
      </Routes>
    </div>
  );
}

export default App;
