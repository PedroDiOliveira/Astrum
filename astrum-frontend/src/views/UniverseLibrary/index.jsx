import React, { useState, useEffect } from "react";
import axios from "axios";
import AstrumLink from "../../components/ReusableComponents/AstrumLink";
import "./styles.css";

export default function UniverseLibrary() {
  // Estado para armazenar os planetas retornados pela requisição
  const [planets, setPlanets] = useState([]);

  // Função para buscar os dados
  async function getData() {
    try {
      const response = await axios.get("http://localhost:8080/planet/planets");
      setPlanets(response.data); // Atualiza o estado com a lista de planetas
    } catch (error) {
      console.error("Erro ao buscar dados dos planetas:", error);
    }
  }

  // useEffect para chamar a função ao carregar o componente
  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      {planets.map((planet, index) => (
        <AstrumLink key={index} {...planet} />
      ))}
    </main>
  );
}
