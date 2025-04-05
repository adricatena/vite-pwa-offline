import { useState } from "react";
import { Link } from "react-router";
import "./App.css";
import reactLogo from "./assets/react.svg";
import PWABadge from "./PWABadge.tsx";
import appLogo from "/favicon.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="vite-pwa-offline logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>vite-pwa-offline</h1>
      <Link to="/ruta-uno">Ir a ruta UNO</Link>
      <Link to="/ruta-dos">Ir a ruta DOS</Link>
      <Link to="/ruta-tres">Ir a ruta TRES</Link>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  );
}

export default App;
