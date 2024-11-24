import LeftArrow from "../../../assets/icons/leftArrow.svg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ReturnArrow({ path }) {
    const navigate = useNavigate();

    const PushToNavigationPage = () => {
        navigate(path);
    };

    return (
        <div className="return-arrow" onClick={PushToNavigationPage}>
            <img className="arrow" src={LeftArrow} alt="return arrow" />
        </div>
    );
}