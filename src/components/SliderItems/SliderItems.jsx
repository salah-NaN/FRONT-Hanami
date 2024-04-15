import { useRef, useState } from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

import { PrevArrow, NextArrow } from "../flecha";

const SliderItems = ({
  url,
  setActividadOrPuntoInteres,
  actividadOrPuntoInteres,
}) => {
  const swiperRef = useRef(null);
  const [nextSlideState, setNextSlideState] = useState(true);
  const [selectedButton, setSelectedButton] = useState({
    puntos_interes: true,
    actividades: false,
  });

  const nextSlide = () => {
    swiperRef.current.swiper.slidePrev();
    setNextSlideState(false);
  };

  const swipeActividades = () => {
    setSelectedButton({
      puntos_interes: false,
      actividades: true,
    });

    fetch(url + `actividades`)
      .then((res) => res.json())
      .then((actividades) => setActividadOrPuntoInteres(actividades))
      .catch((error) => console.log(error));
  };

  const swipePuntosInteres = () => {
    setSelectedButton({
      puntos_interes: true,
      actividades: false,
    });

    fetch(url + `puntos_interes`)
      .then((res) => res.json())
      .then((puntos_interes) => setActividadOrPuntoInteres(puntos_interes))
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <h1 className="text-3xl pb-4">Donde quieres ir hoy?</h1>
      <div className="flex gap-5">
        <button
          className={`bg-white px-3 py-2 rounded-md  ${
            selectedButton.puntos_interes === true
              ? `border text-[#7EB479] border-[#7EB479] bg-[#ebf7eb]`
              : `text-black`
          }`}
          onClick={swipePuntosInteres}
        >
          Puntos de interes
        </button>
        <button
          className={`bg-white px-3 py-2 rounded-md  ${
            selectedButton.actividades === true
              ? `border text-[#7EB479] border-[#7EB479] bg-[#ebf7eb]`
              : `text-black`
          }`}
          onClick={swipeActividades}
        >
          Actividades
        </button>
      </div>
      <div className="flex md:hidden border-none py-10 w-full">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          direction={"vertical"}
        >
          <div className="">
            {actividadOrPuntoInteres?.map((puntoInteresActividad) => (
              <>
                <SwiperSlide
                  className="border-none rounded-lg w-full"
                  key={puntoInteresActividad.id}
                >
                  <div className="">{puntoInteresActividad.nombre}</div>
                </SwiperSlide>
              </>
            ))}
          </div>
        </Swiper>
      </div>

      <div className="hidden md:block pt-5">
        <Swiper
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={5}
          navigation
          ref={swiperRef}
          modules={[Navigation]}
          breakpoints={{
            // Configuración para tamaños de pantalla más pequeños (móviles)
            640: {
              slidesPerView: 4, // Cambia a 2 slides por vista en pantallas de 640px o menos
              spaceBetween: 10, // Espacio entre slides
            },
          }}
        >
          {actividadOrPuntoInteres?.map((puntoInteresActividad) => (
            <>
              <SwiperSlide>
                <div className="h-52 border-none rounded-md p-3">
                  <div className="flex flex-col h-full">
                    <div className="bg-red-300 h-4/5 w-full border-none rounded-md">
                      {/* Image */}d
                    </div>
                    <div className="flex w-full h-1/4 justify-start items-end p-2 font-semibold">
                      {puntoInteresActividad.nombre}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
          {/* <div className="custom-prev border-none rounded-full shadow-xl bg-white" onClick={nextSlide}>
        <PrevArrow />
      </div>

      <div className="custom-next border-none rounded-full shadow-xl bg-white" onClick={() => swiperRef.current.swiper.slideNext()}>
        <NextArrow />
      </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderItems;