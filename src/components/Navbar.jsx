import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 h-16 shadow-md relative bg-center p-5 md:m-10 m-5 rounded-full">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-10 text-gray-700 font-medium">
        <NavLink to= '/' className={({isActive}) => isActive ? "text-blue-600" : "text-black hover:text-blue-600"}>Home</NavLink>
        <NavLink to= '/about' className={({isActive}) => isActive ? "text-blue-600" : "text-black hover:text-blue-600"}>About</NavLink>
        <NavLink to= '/contact' className={({isActive}) => isActive ? "text-blue-600" : "text-black hover:text-blue-600"}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
