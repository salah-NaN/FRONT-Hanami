import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const SwiperComponent = ({ images }) => {


  return (
    <>
      <div className="flex md:hidden border-none w-full">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          direction={"vertical"}
        >
          <div className="">
            {images?.map((image) => (
              <div key={image?.id}>
                <div className="bg-red-500 w-full">
                  <SwiperSlide
                    className="border-none rounded-lg "
                    key={image.id}
                  >
                    <img className="w-full" src={`http://localhost:3000/img/${image.nombre}${image.tipo}`} ></img>
                  </SwiperSlide>
                </div>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  )
};

export default SwiperComponent;
