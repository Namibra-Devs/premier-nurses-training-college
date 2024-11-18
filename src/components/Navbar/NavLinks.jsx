import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  return (
    <>
      {links.map((link, linkIndex) => (
        <div key={linkIndex}>
          {/* Desktop menus */}
          <div className="text-left md:cursor-pointer group">
            <Link
              to={link.link}
              className="block hover:text-yellow-400 duration-500"
            >
              <h1 className="font-normal flex justify-between items-center mr-4 py-3 md:py-0 group">
                {link.name}
              </h1>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
