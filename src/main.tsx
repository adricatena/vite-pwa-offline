import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";
import { RutaDos } from "./ruta-dos.tsx";
import { RutaTres } from "./ruta-tres.tsx";
import { RutaUno } from "./ruta-uno.tsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/ruta-uno",
    Component: RutaUno,
  },
  {
    path: "/ruta-dos",
    Component: RutaDos,
  },
  {
    path: "/ruta-tres",
    Component: RutaTres,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
