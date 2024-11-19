import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  return (
    <>
      {links.map((menu, linkIndex) => (
        <div key={linkIndex}>
          {/* Desktop menus or links */}
          <div className="text-left md:cursor-pointer">
            <Link
              to={menu.link}
              className="block hover:text-yellow-400 duration-500 group"
            >
              <h1 className="font-normal flex justify-between items-center mr-4 py-3 md:py-0 group relative">
                {menu.name}
              </h1>
              <span className="hidden md:flex absolute group-hover:text-yellow-400 opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
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
