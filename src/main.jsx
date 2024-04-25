import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Inicio from "./pages/Inicio.jsx";
import PuntoInteres from "./pages/PuntoInteres.jsx";
import Actividades from "./pages/Actividades.jsx";
import Mapa from "./components/mapa/Mapa.jsx";
import Busqueda from "./pages/Busqueda.jsx";
import BusquedaActividad from "./pages/BusquedaActividad.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

//     <Route path="/" element={<App />}>
//       {/* el inicio */}
//       <Route index element={<Inicio />}></Route>
//       {/* el register y el login */}
//       <Route path="/login" element={<Login />}></Route>

//       <Route path="/register" element={<Register />}></Route>
//       {/* las rutas de cada tabla */}
//       <Route path="/puntosInteres/:id" element={<PuntoInteres />}></Route>
//       {/* aqui se puede crar la ruta de las temporadas si se requiere */}
//       <Route path="/actividades/:id" element={<Actividades />}></Route>
