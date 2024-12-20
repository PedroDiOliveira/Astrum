import React, { useState, useEffect } from "react";
import axios from "axios";
import AstrumLink from "../../components/ReusableComponents/AstrumLink";
import "./styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import ReturnArrow from "../../components/ReusableComponents/ReturnArrow";

export default function ThemeLibrary() {
  const navigate = useNavigate();
  const location = useLocation();

  // Captura o último parâmetro da URL
  const path = location.pathname.split("/").filter(Boolean).pop();

  const [themes, setThemes] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(`http://localhost:8080/${path}`);
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
      navigate(rota.toLowerCase());
    } catch (error) {
      navigate("/internal-error");
      console.error("Erro ao buscar dados do tema:", error);
    }
  }

  return (
    <div className="universeLibrary">
      <div className="upper-head">
        <ReturnArrow path={"/universe-library"} />
      </div>
      <div className="title">
        <h2>{path.toUpperCase()}</h2>
      </div>
      <main>
        {themes.map((theme, index) => (
          <AstrumLink
            onClick={() => handleClick(`/${path}/${theme.name}`)}
            key={index}
            name={theme.name}
            photo={theme.photo}
          />
        ))}
      </main>
    </div>
  );
}
