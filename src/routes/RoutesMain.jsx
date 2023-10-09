import { Route, Routes } from "react-router-dom";
import { Contact, Home, Projects, Register, Testimonies } from "../pages";

export const RoutesMain = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Home user={user}/>}/>
      <Route path="/register" element={<Register setUser={setUser}/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/testimonies" element={<Testimonies/>}/>
    </Routes>
  );
}