import { ArrowRight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function NextPageArrow({ onClick }) {
    const navigate = useNavigate();

    const PushToNavigationPage = () => {
        setTimeout(() => {
            navigate("/universe-library");
        }, 1500);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="nextPage" onClick={PushToNavigationPage}>
            <ArrowRight weight="thin" size={26} />
        </div>
    );
}
