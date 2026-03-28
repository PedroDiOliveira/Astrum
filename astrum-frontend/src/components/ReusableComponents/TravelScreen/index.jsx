import "./styles.css";
import saturnIcon from "../../../assets/icons/saturnoicon 1.svg";

export default function TravelScreen() {
    return (
        <div className="travel-screen">
            <img src={saturnIcon} alt="Saturn icon" className="travel-icon" />
            <p className="travel-quote">
                "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself." – Carl Sagan
            </p>
            <div className="travel-text">
                <span>traveling</span>
                <span className="dot dot-1">•</span>
                <span className="dot dot-2">•</span>
                <span className="dot dot-3">•</span>
            </div>
        </div>
    );
}
