import React, { useState, useEffect } from "react";
import axios from "axios";
import AstrumLink from "../../components/ReusableComponents/AstrumLink";
import "./styles.css";
import { useNavigate, useLocation} from "react-router-dom";
import ReturnArrow from "../../components/ReusableComponents/ReturnArrow";

export default function UniverseLibrary() {
  const navigate = useNavigate()
  const [themes, setThemes] = useState([]);

  async function getData() {
    try {
      const response = await axios.get("http://localhost:8080/theme");
      setThemes(response.data);
    } catch (error) {
      navigate("/internal-error");
      console.error("Erro ao buscar dados dos planetas:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleClick(rota) {
    try {
      navigate(rota.toLowerCase())
    } catch (error) {
      navigate("/internal-error");
      console.error("Erro ao buscar dados do tema:", error);
    }
  }

  return (
    <div className="universeLibrary">
      <div className="upper-head">
        <ReturnArrow path={"/"} />
      </div>
      <div className="title">
        <h2>UNIVERSE</h2>
      </div>
      <main>
              {themes.map((theme, index) => (
                  <AstrumLink 
                  onClick={() => handleClick(theme.name)} 
                  key={index} 
                  name={theme.name} 
                  photo={theme.photo} 
                />
              ))}
      </main>
    </div>
  );
}