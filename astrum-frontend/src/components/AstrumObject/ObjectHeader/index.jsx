import "./styles.css";
import { SquaresFour } from "@phosphor-icons/react";
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
                <SquaresFour weight="thin" size={28} />
            </div>
        </div>
    );
}
