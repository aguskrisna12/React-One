import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 h-14 w-auto text-white flex justify-around items-center">
      <NavLink className="active:animate-ping hover:animate-bounce" to="/">
        Home
      </NavLink>
      <NavLink className="active:animate-ping hover:animate-bounce" to="/movie">
        Movie
      </NavLink>
    </nav>
  );
}

export default Navbar;
