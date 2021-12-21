import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Empleados from "./pages/Empleados";
import Index from "./pages/Index";
import Visitantes from "./pages/Visitantes";
import Vehiculos from "./pages/Vehiculos";
import Ingreso from "./pages/Ingreso";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Index />} />
          <Route path="visitantes" element={<Visitantes />} />
          <Route path="empleados" element={<Empleados />} />
          <Route path="vehiculos" element={<Vehiculos />} />
          <Route path="ingreso" element={<Ingreso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
