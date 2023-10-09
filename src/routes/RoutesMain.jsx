import { Route, Routes } from "react-router-dom";
import { Contact, Home, Projects, Testimonies } from "../pages";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/testimonies" element={<Testimonies/>}/>
    </Routes>
  );
}