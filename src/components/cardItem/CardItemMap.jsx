import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const CardItemMap = ({ puntos_interes }) => {
  console.log(puntos_interes);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControladores = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControladores.start("visible");
    }
  }, [isInView]);

  //Pensar si esto deberia ser así, de hecho yo diria que no, las imagenes deberian estar en el back
  const obtenerPngTipo = (tipo) => {
    if (tipo === "Olivo") return "./images/olivos.png";
    if (tipo === "Lavanda") return "./images/lavanda.png";
    if (tipo === "Viña") return "./images/uva.png";
    if (tipo === "Cerezo") return "./images/cerezas.png";
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControladores}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="border-none rounded-md w-full h-full cursor-pointer"
      style={{
        backgroundImage: `url(${puntos_interes.imagen})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="">
        <motion.div
          className="bg-red-red
      w-full ml:flex ml:flex-col mx:flex mx:flex-col
       md:flex md:flex-row bg-sky-200 h-full border"
        >
          <div className="flex justify-start px-2 bg-red-300">
            <div className={`border-none w-full h-full px-1 py-1 rounded-md`}>
              {
                <img
                  src={obtenerPngTipo(puntos_interes.tipo)}
                  alt={puntos_interes.tipo}
                  className=""
                />
              }
            </div>
          </div>
          {/* Items card mapa */}
          <div className="px-2 bg-white w-full">
            <h1 className="text-xl text-semibold pt-1 text-green-600">
              {puntos_interes.nombre}
            </h1>
            <div className="border">{puntos_interes.tipo}</div>
          </div>
          {/* <div
          className="sm:flex w-full py-1 px-2 flex flex-row absolute 
          bottom-0 rounded-b-md bg-gradient-to-t from-[#008000]"
        >
          <div className="flex w-full justify-end absolute bottom-2 items-center px-2">
            <div className={`border-none px-1 py-1 rounded-md`}>
              {
                <img
                  src={obtenerPngTipo(puntos_interes.tipo)}
                  alt={puntos_interes.tipo}
                  className="w-7 h-full"
                />
              }
            </div>
          </div>
          <h1 className="text-md font-bold text-white">
            {puntos_interes?.nombre}
          </h1>
          <h1 className="text-white text-sm font-light">
            {puntos_interes.comarca}
          </h1>
        </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardItemMap;
