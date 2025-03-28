import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    console.log(location)
    const links=<>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statistics">Statistics</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>

    return (
        <div className="navbar  mt-4  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm font-semibold dropdown-content font-xl   bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
       {links} 
 
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold"> Gadget Heaven </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu font-semibold  font-xl menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex lg:mr-8 gap-2 ">
    <MdOutlineShoppingCart className="border bg-white text-2xl rounded-full"></MdOutlineShoppingCart>
    <FaRegHeart className="border bg-white text-2xl rounded-full" ></FaRegHeart>
  </div>
</div>
    );
};

export default Navbar;