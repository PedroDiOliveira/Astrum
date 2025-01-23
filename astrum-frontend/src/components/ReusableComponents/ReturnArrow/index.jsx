import LeftArrow from "../../../assets/icons/leftArrow.svg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ReturnArrow({ path }) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (path) {
            navigate(path); // Navega para o path fornecido
        } else {
            navigate(-1); // Volta para o path anterior no histórico
        }
    };

    return (
        <div className="return-arrow" onClick={handleNavigation}>
            <img className="arrow" src={LeftArrow} alt="return arrow" />
        </div>
    );
}
