import { Link } from "react-router";

export function RutaUno() {
  return (
    <main>
      <h2>Esta es la RUTA UNO</h2>
      <Link to="/">Ir a la Home</Link>
      <Link to="/ruta-dos">Ir a Ruta dos</Link>
      <Link to="/ruta-tres">Ir a Ruta tres</Link>
    </main>
  );
}
