import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

export const CardHotTrendItem = ({ hotTrend }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControladores = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControladores.start("visible");
    }
  }, [isInView]);

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
        backgroundImage: `url(localhost:3000/api/${hotTrend.imagen}.png)`,
        backgroundSize: `cover`,
      }}
    >
      <Link to={`puntosInteres/${hotTrend?.id}`}>
        <motion.div className="flex items-start w-full h-full relative">
          <div
            className="sm:flex w-full py-1 px-2 flex-col absolute 
          bottom-0 rounded-b-md bg-gradient-to-t from-[#008000]"
          >
            <h1 className="text-md font-bold text-white">{hotTrend?.nombre}</h1>
            <h1 className="text-white text-sm font-light">
              {hotTrend?.comarca}
            </h1>
          </div>
          <div className="flex w-full justify-end absolute bottom-2 items-center px-2">
            <div className={`border-none px-1 py-1 rounded-md`}>
              {
                <img
                  // src={`localhost:3000/img/${hotTrend.imagen.nombre}${hotTrend.imagen.tipo}`}
                  alt={hotTrend?.tipo}
                  className="w-7 h-full"
                />
              }
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CardHotTrendItem;
