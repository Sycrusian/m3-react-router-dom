import { Route, Routes } from "react-router-dom";
import { Contact, FakeNews, Home, News, NewsPiece, Projects, Register, Testimonies, ToDo } from "../pages";

export const RoutesMain = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/register" element={<Register setUser={setUser} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/testimonies" element={<Testimonies />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsPiece />} />
      <Route path="/todo" element={<ToDo />} />
      <Route path="/*" element={<FakeNews />} />
    </Routes>
  );
}