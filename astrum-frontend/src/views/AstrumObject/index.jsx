import "./styles.css";
import ObjectName from "../../components/AstrumObject/ObjectName";
import ObjectHeader from "../../components/AstrumObject/ObjectHeader";
import ObjectPhoto from "../../components/AstrumObject/ObjectPhoto";
import ObjectStatus from "../../components/AstrumObject/ObjectStats";
import TravelScreen from "../../components/ReusableComponents/TravelScreen";
import marsImg from "../../assets/planets/mars.svg";
import saturnImg from "../../assets/planets/saturn.svg";
import earthImg from "../../assets/planets/earth.svg";
import jupiterImg from "../../assets/planets/jupiter.svg";
import mercuryImg from "../../assets/planets/mercury.svg";
import neptuneImg from "../../assets/planets/neptune.svg";
import uranusImg from "../../assets/planets/uranus.svg";
import venusImg from "../../assets/planets/venus.svg";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PLANET_PHOTOS = {
    MARS: marsImg,
    SATURN: saturnImg,
    EARTH: earthImg,
    JUPITER: jupiterImg,
    MERCURY: mercuryImg,
    NEPTUNE: neptuneImg,
    URANUS: uranusImg,
    VENUS: venusImg,
};

const MIN_LOADING_MS = 3500;

export default function AstrumObject() {
    const { planet } = useParams();
    const navigate = useNavigate();
    const [planetData, setPlanetData] = useState(null);
    const [minTimeElapsed, setMinTimeElapsed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMinTimeElapsed(true), MIN_LOADING_MS);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`http://localhost:8080/planets/${planet.toUpperCase()}`);
                setPlanetData(response.data);
                console.log("Resposta do servidor:", response.data);
            } catch (error) {
                console.error("Erro ao enviar os dados:", error);
                navigate("/internal-error");
            }
        }

        getData();
    }, [planet]);

    if (!planetData || !minTimeElapsed) {
        return <TravelScreen />;
    }

    const planetPhoto = PLANET_PHOTOS[planet.toUpperCase()] || marsImg;

    return (
        <div className="main-content">
            <ObjectHeader hexColor={planetData?.color} />
            <ObjectName
                name={planet ? planet.toUpperCase() : "UNKNOWN"}
                nickname={planetData?.nickname || "UNKNOWN NICKNAME"}
                hexColor={planetData?.color}
            />
            <ObjectPhoto photo={planetPhoto} />
            <ObjectStatus planetData={planetData} hexColor={planetData?.color} />
        </div>
    );
}
