import "./styles.css"

export default function ObjectName({name, nickname}){
    return(
        <div className="object-hero-text">
            <h3>{name}</h3>
            <h2>{nickname}</h2>
        </div>
    )
}