import { useState } from "react";

export function useLocalStorage(key, valorInicial) {
  const [valorGuardado, setValorGuardado] = useState(() => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : valorInicial;
    } catch (error) {
      console.log("error");
      return valorInicial;
    }
  });
  setDatos(JSON.parse(localStorage.getItem("user")));
  const setValor = (valor) => {
    try {
      setValorGuardado(valor);
      localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.log("error");
    }
  };
  return [valorGuardado, setValor];
}
