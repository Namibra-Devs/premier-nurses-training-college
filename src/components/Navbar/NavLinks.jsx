import { Link, useLocation } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const location = useLocation();
  
  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {links.map((menu, linkIndex) => (
        <div key={linkIndex}>
          {/* Desktop menus or links */}
          <div className="text-left md:cursor-pointer">
            <Link
              to={menu.link}
              className={`block hover:text-yellow-400 duration-500 group ${
                isActive(menu.link) ? "text-yellow-400 font-semibold" : ""
              }`}
            >
              <h1 className="flex justify-between items-center mr-4 py-3 md:py-0 group relative">
                {menu.name}
              </h1>
              <span className={`hidden md:flex absolute group-hover:text-yellow-400 ${
                isActive(menu.link) ? "opacity-100 text-yellow-400" : "opacity-0"
              } duration-700 ease-in-out`}>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </span>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;