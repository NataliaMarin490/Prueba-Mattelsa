import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Empleados from "./pages/Empleados";
import Index from "./pages/Index";
import Ingreso from "./pages/Ingreso";
import Ingreso2 from "./pages/IngresoEmpleados";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Index />} />
          <Route path="empleados" element={<Empleados />} />
          <Route path="ingreso" element={<Ingreso />} />
          <Route path="ingresoEmpleados" element={<Ingreso2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
