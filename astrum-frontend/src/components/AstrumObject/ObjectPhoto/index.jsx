import "./styles.css";

export default function ObjectPhoto({ photo, className }) {
    return (
        <div className={`photo-container ${className || ""}`}>
            <img className="photo photo-animation" src={photo} alt="Object Photo" />
        </div>
    );
}
