import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardItemMap } from "../components";
import MapaSinSlider from "../components/mapa/MapaSinSlider";
import {motion} from 'framer-motion'
import GrowShrinkMap from "../components/GrowShrinkMap";

const Busqueda = () => {
  const { quehacer, localizacion, fecha, flor } = useParams();
  // los puntos de interes filtrados
  const [filterData, setFilterData] = useState([]);


  useEffect(() => {
    const url = "http://localhost:3000/api/";
    fetch(url + `puntos_interes/${localizacion}/${fecha}/${flor}`)
      .then((res) => res.json())
      .then((filterData) => {
        setFilterData(filterData)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-11/12 mx-auto border-none">
      <div className="grid grid-cols-2 border-none rounded-md">
        <div className="">
          <div className="grid grid-cols-1 max-auto overflow-y-auto h-[600px]">
            {filterData?.slice(0, 2).map((puntos_interes) => (
              <div className="w-full h-full overscroll-contain">
                <CardItemMap puntos_interes={puntos_interes} />
              </div>
            ))}
            {filterData?.slice(2, 6).map((puntos_interes) => (
              <div className="w-full h-full">
                <CardItemMap puntos_interes={puntos_interes} />
              </div>
            ))}
          </div>
        </div>

        <motion.div className="relative flex justify-end w-full origin-left"
                initial={{ width: '300px' }}
                animate={{ width: '100%' }}
                transition={{duration: 1}}
            >
          <GrowShrinkMap/>
          {
            filterData && <MapaSinSlider puntosInteres={filterData} setPuntosInteres={setFilterData} />
          }
            </motion.div>

      </div>

    </div>
  );
};

export default Busqueda;
