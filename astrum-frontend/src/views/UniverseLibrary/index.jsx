import React, { useState, useEffect } from "react";
import axios from "axios";
import AstrumLink from "../../components/ReusableComponents/AstrumLink";
import "./styles.css";
import { Route, useNavigate } from "react-router-dom";

export default function UniverseLibrary() {
  const navigate = useNavigate()
  const [planets, setPlanets] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:8080/planet");
      setPlanets(response.data);
    } catch (error) {
      navigate("/internal-error");
      console.error("Erro ao buscar dados dos planetas:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="universeLibrary">
      
      <main>
          {/* <div className="links"> */}
              {planets.map((planet, index) => (
                  <AstrumLink key={index} {...planet} />
              ))}
          {/* </div> */}
      </main>
    </div>
  );
}
