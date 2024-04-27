import { useLocation } from "react-router-dom";
import { AnimatePresence, useCycle, motion } from "framer-motion";
import { AccountButton, Logo, HanburgerButton, NavLinks, SearchBar } from "../";
import { BuscadorGrandeOtrasPaginas, BuscadorOtrasPaginas } from "../Buscador";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const location = useLocation();
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [buscadorNav, toggleBuscadorNav] = useCycle(false, true);
  const [puntosDeInteres, setPuntosDeInteres] = useState([]);

  const toggleMenu = () => {
    toggleMobileNav();
  };

  const openOnPopUpBuscador = () => {
    toggleBuscadorNav();
  };

  useEffect(() => {
    const url = "http://localhost:3000/api";
    fetch(url + "/puntos_interes")
      .then((res) => res.json())
      .then((puntos_interes) => setPuntosDeInteres(puntos_interes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      <motion.header
        className={`w-full ${
          location.pathname.includes("/puntoInteres") ||
          location.pathname.includes("/actividades")
            ? "w-10/12 mx-auto md:w-[68%] xl:mx-auto"
            : location.pathname.includes("/busqueda")
            ? "w-full h-24"
            : "z-10 absolute top-0 xl:w-9/12 mx-auto left-0 right-0"
        } ${buscadorNav === true ? `h-48 absolute bg-white z-50` : ``}`}
      >
        <div
          className={`overflow-visible border-r-0 border-l-0 border-t-0  h-full ${
            location.pathname == "/" ? "w-11/12 mx-auto" : ""
          }`}
        >
          {/* Antes el w-full estaba en w-10/12 */}
          <nav className={`w-11/12 max-auto flex 
          ${buscadorNav === true ? `h-full items-center`: ``} justify-between py-3 mx-auto`}>
            <Logo />
            {location.pathname !== "/" && buscadorNav === false ? (
              <BuscadorOtrasPaginas openOnPopUpBuscador={openOnPopUpBuscador} />
            ) : buscadorNav === true ? (
              <div className="flex justify-center items-center h-full">
                <BuscadorGrandeOtrasPaginas puntosDeInteres={puntosDeInteres} />
              </div>
            ) : null}
            <div className="hidden md:inline">
              <AccountButton />
            </div>
            <div className="flex items-center md:hidden lg:hidden xl:hidden">
              <HanburgerButton toggleMenu={toggleMenu} />
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileNav && (
          <motion.div className="sticky z-20 top-0 left-0 w-full h-screen">
            <NavLinks toggleMenu={toggleMenu} mobileNav={mobileNav} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
