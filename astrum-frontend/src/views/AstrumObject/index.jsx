import "./styles.css";
import ObjectName from "../../components/AstrumObject/ObjectName";
import ObjectHeader from "../../components/AstrumObject/ObjectHeader";
import ObjectPhoto from "../../components/AstrumObject/ObjectPhoto";
import fotoProvisoria from "../../assets/planets/mars.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AstrumObject() {
    const { planet } = useParams();
    const [planetData, setPlanetData] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`http://localhost:8080/planets/${planet.toUpperCase()}`);
                setPlanetData(response.data);
                console.log("Resposta do servidor:", response.data);
            } catch (error) {
                console.error("Erro ao enviar os dados:", error);
            }
        }

        getData();
    }, [planet]);

    return (
        <div className="main-content">
            <ObjectHeader />
            <ObjectName 
                name={planet ? planet.toUpperCase() : "UNKNOWN"} 
                nickname={planetData?.nickname || "UNKNOWN NICKNAME"} 
            />
            <ObjectPhoto photo={planetData?.photo || fotoProvisoria} />
        </div>
    );
}
