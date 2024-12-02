import "./styles.css";

export default function AstrumLink({ name, photo, onClick }) {
  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <h4>{name}</h4>
      <div className="card-icon">
        <img src={photo} alt={`Imagem representando ${name}`} />
      </div>
    </div>
  );
}
