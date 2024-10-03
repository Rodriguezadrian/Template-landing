import { useEffect, useState } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function NavbarApp() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isContactPage = location.pathname === "/contacto" || "/sobre-nosotros";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="header"
        className={`fixed w-full z-30 top-0 transition-all duration-300 ease-in-out 
                  ${scrolled ? "bg-[--gradient] text-black" : "text-[#ffffff]"} 
                  ${isContactPage && !scrolled ? "text-slate-950" : ""}`}
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <NavLink className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
              <svg
                className="h-8 fill-current inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.005 512.005"
              >
                <rect
                  fill="#2a2a31"
                  x="16.539"
                  y="425.626"
                  width="479.767"
                  height="50.502"
                  transform="matrix(1,0,0,1,0,0)"
                />
                <path
                  className="plane-take-off"
                  d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                />
              </svg>
              LOREM
            </NavLink>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              className="flex items-center p-1 text-[#d53369] z-100 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          {/* Menú móvil (controlado por el estado) */}
          <div
            className={`${
              menuOpen
                ? "absolute top-12 left-0 w-full bg-[#d53369] z-50"
                : "hidden"
            }`}
            id="mobile-menu"
          >
            <div className="space-y-6 px-2 pb-3 pt-2 text-center">
              <NavLink
                smooth
                to="/"
                className="block rounded-md px-3 py-2 text-lg font-medium text-[#ffff]  hover:bg-[--papaya-whip] hover:text-[#040404]"
                onClick={toggleMenu}
              >
                Inicio
              </NavLink>
              <NavLink
                smooth
                to="/sobre-nosotros"
                className="block rounded-md px-3 py-2 text-lg font-medium text-[#ffff] hover:bg-[--papaya-whip] hover:text-[#040404]"
                onClick={toggleMenu}
              >
                Sobre Nosotros
              </NavLink>
              <NavLink
                smooth
                to="/contacto"
                className="block rounded-md px-3 py-2 text-lg font-medium text-[#ffff] hover:bg-[--papaya-whip] hover:text-[#040404]"
                onClick={toggleMenu}
              >
                Contacto
              </NavLink>
            </div>
          </div>

          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li
                className={`${
                  scrolled
                    ? "mr-3 hover:bg-red-300 duration-300 hover:rounded-md"
                    : "mr-3"
                }`}
              >
                <NavLink
                  className="inline-block py-2 hover:underline px-4 no-underline"
                  href="#"
                >
                  Inicio
                </NavLink>
              </li>
              <li
                className={`${
                  scrolled
                    ? "mr-3 hover:bg-red-300 duration-300 hover:underline  hover:rounded-md"
                    : "mr-3"
                }`}
              >
                <NavLink
                  className="inline-block  py-2 px-4"
                  smooth
                  to={"/sobre-nosotros"}
                >
                  Sobre Nosotros
                </NavLink>
              </li>
              <li
                className={`${
                  scrolled
                    ? "mr-3 hover:bg-red-300 duration-300 hover:underline  hover:rounded-md"
                    : "mr-3"
                }`}
              >
                <NavLink
                  className="inline-block py-2 px-4"
                  smooth
                  to={"/contacto"}
                >
                  Contacto
                </NavLink>
              </li>
              <li id="navAction" className="mr-3">
                <button className="mx-auto lg:mx-0 text-[#ffffff] bg-red-500 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Accion
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarApp;
