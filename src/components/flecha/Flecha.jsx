import { useViewportScroll, useTransform, motion } from "framer-motion";

export const Flecha = () => {
  return (
    <div className="border-none rounded-full p-2 animate-bounce backdrop-blur">
      <svg
        viewBox="0 0 24 24"
        stroke-width="1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
        className="w-12 cursor-pointer"
      >
        <path
          d="M12 3L12 21M12 21L20.5 12.5M12 21L3.5 12.5"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default Flecha;
