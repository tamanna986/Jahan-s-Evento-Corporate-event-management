import {  NavLink } from "react-router-dom";
import { FaPersonCirclePlus} from "react-icons/fa6";


const Navbar = () => {
    const navLinks = 
    <>
   <li><NavLink to = '/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</NavLink></li>
   <li><NavLink to = '/Services' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Services</NavLink></li>
   <li><NavLink to = '/Login' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Log in</NavLink></li>
   <li><NavLink to = '/Register' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Register</NavLink></li>
    </>

    return (
        <div className="mx-auto container">
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {
            navLinks
           }
      </ul>
    </div>
    <img className="w-[400px] md:w-72 -ml-12" src="https://i.ibb.co/3c0TttY/cover-removebg-preview.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
            navLinks
           }
    </ul>
  </div>
  <div className="navbar-end ">
    
    <a className="btn btn-info text-white rounded-full"><FaPersonCirclePlus></FaPersonCirclePlus>Log In</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;