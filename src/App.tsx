import { HashRouter as Router, Routes, Route } from "react-router-dom";
//paginas
import Inicio from "./app/inicio/index";
import MisCuriosidades from "./app/misCuriosidades";
import NuevaCuriosidad from "./app/nuevaCuriosidad";

//componentes
import ShowRoute from "./shared/routes/index";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ShowRoute children={<Inicio />} position={false} />}
        />
        <Route
          path="/Nueva-curiosidad"
          element={
            <ShowRoute children={<NuevaCuriosidad />} position={false} />
          }
        />
        <Route
          path="/Mis-curiosidades"
          element={<ShowRoute children={<MisCuriosidades />} position={false} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
