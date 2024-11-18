import React, { useState, useEffect } from "react";
import axios from "axios";
import AstrumLink from "../../components/ReusableComponents/AstrumLink";
import "./styles.css";

export default function UniverseLibrary() {
  const [planets, setPlanets] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:8080/planet/planets");
      setPlanets(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados dos planetas:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
        <div className="links">
            {planets.map((planet, index) => (
                <AstrumLink key={index} {...planet} />
            ))}
        </div>
    </main>
  );
}
