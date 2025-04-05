import { Link } from "react-router";

export function RutaDos() {
  return (
    <main>
      <h2>Esta es la RUTA DOS</h2>
      <Link to="/">Ir a la Home</Link>
      <Link to="/ruta-uno">Ir a Ruta uno</Link>
      <Link to="/ruta-tres">Ir a Ruta tres</Link>
    </main>
  );
}
