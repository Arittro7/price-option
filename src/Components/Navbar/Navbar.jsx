import { useState } from "react";
import Link from "../Link/Link";
import { GiOpenBook, GiAnticlockwiseRotation } from "react-icons/gi";

const Navbar = () => {

  // declare state for open close effect on icons
  const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav>
      <div className="md:hidden text-xl text-orange-500"
      onClick={() => setOpen(!open)}>
        {
          // open === true ? 'open': 'close'
          // open close text will change with icons
          open === true ? <GiAnticlockwiseRotation></GiAnticlockwiseRotation> : <GiOpenBook></GiOpenBook> 
        }
      </div>
      <ul className={`md:flex md:static absolute duration-1000 ${open ? 'top-16':'-top-60' } bg-green-500 text-black px-6`}>
        {/* {
        routes.map(route =><li className="ml-10" key={route.id}> 
        <a href={route.path}>{route.name}</a> </li>)
      } */}
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
