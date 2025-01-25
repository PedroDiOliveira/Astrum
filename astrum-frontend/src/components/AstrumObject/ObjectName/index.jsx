import "./styles.css"

export default function ObjectName({name, nickname,hexColor}){
    return(
        <div className="object-hero-text">
            <h3 style={{color:hexColor}}>{name}</h3>
            <h2 style={{color:hexColor}}>{nickname}</h2>
        </div>
    )
}