import HeroText from "../../components/LandingPage/HeroText";
import NextPageArrow from "../../components/LandingPage/NextPageArrow";
import SaturnPhoto from "/src/assets/planets/saturn.svg";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Home() {
    const [scale, setScale] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const timer = setTimeout(() => {
            setScale(1);
            setOpacity(1);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 28;
            const y = (e.clientY / window.innerHeight - 0.5) * 18;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleArrowClick = () => {
        setScale(0);
        setOpacity(0);
    };

    return (
        <div id="landingPage">
            <div style={{ opacity: opacity, transition: "opacity ease 8s" }}>
                <HeroText />
            </div>
            <div
                className="bottom-container"
                style={{ opacity: opacity, transition: "transform ease 1.8s, opacity ease 1.8s" }}
            >
                <NextPageArrow onClick={handleArrowClick} />
            </div>
            <div
                className="saturn-parallax"
                style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                    transition: "transform ease 0.9s",
                }}
            >
                <img
                    className="saturn"
                    src={SaturnPhoto}
                    alt="Saturn Photo"
                    style={{
                        transform: `scale(${scale})`,
                        transition: "transform ease 3.6s",
                    }}
                />
            </div>
        </div>
    );
}
