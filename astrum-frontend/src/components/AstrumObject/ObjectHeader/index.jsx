import "./styles.css";
import ReturnArrow from "../../ReusableComponents/ReturnArrow";
import { useNavigate } from "react-router-dom";

export default function ObjectHeader({ hexColor }) {
    const navigate = useNavigate();

    return (
        <div className="object-header">
            <ReturnArrow />
            <div
                className="grid-icon"
                onClick={() => navigate("/universe-library")}
                style={{ color: hexColor || "white" }}
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="grid-dot"></span>
                ))}
            </div>
        </div>
    );
}
