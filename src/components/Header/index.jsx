import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/news">Notícias</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/todo">ToDo List</Link>
        <Link to="testimonies">Testimonies</Link>
      </nav>
    </header>
  );
}