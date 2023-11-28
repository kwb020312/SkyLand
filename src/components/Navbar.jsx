import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to={"/"}
        className="w-10 h-10 rounded-lg bg-white text-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">쵸비</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          Chobby
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          프로젝트
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
