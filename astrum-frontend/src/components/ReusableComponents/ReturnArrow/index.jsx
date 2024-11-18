import RightArrow from "../../../assets/icons/Arrow.svg";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ReturnArrow({ onClick, path }) {
    const navigate = useNavigate();

    const PushToNavigationPage = () => {
        setTimeout(() => {
            navigate({path});
        }, 1500);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="return-arrow" onClick={PushToNavigationPage}>
            <img className="arrow" src={RightArrow} alt="return arrow" />
        </div>
    );
}