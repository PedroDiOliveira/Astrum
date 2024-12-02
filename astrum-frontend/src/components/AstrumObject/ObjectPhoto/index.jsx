import "./styles.css"

export default function ObjectPhoto({photo}){
    return(
        <div className="photo-container">
            <img className="photo" src={photo} alt="Object Photo" />
        </div>
    )
}