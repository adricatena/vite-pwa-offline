import { Link } from "react-router";

export function RutaTres() {
  return (
    <main>
      <h2>Esta es la RUTA TRES</h2>
      <Link to="/">Ir a la Home</Link>
      <Link to="/ruta-uno">Ir a Ruta uno</Link>
      <Link to="/ruta-dos">Ir a Ruta dos</Link>
    </main>
  );
}
