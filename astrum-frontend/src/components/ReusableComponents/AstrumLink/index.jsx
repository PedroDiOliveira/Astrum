import "./styles.css"

export default function AstrumLink(bodie){
    return(
        <div className="card">
            <h4>{bodie.name}</h4>
            <div className="card-icon">
                <img src={bodie.photo} alt="Foto do planeta" />
            </div>
        </div>
    )
}