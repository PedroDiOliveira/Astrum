import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ReturnArrow({ path }) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (path) {
            navigate(path);
        } else {
            navigate(-1);
        }
    };

    return (
        <div className="return-arrow" onClick={handleNavigation}>
            <ArrowLeft weight="thin" size={24} />
        </div>
    );
}
