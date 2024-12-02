import "./styles.css"
import ObjectName from "../../components/AstrumObject/ObjectName"
import ObjectHeader from "../../components/AstrumObject/ObjectHeader"
import ObjectPhoto from "../../components/AstrumObject/ObjectPhoto"
import fotoProvisoria from "../../assets/planets/mars.svg"

export default function AstrumObject(){
    return(
        <div className="main-content">
            <ObjectHeader/>
            <ObjectName name="MARS" nickname="THE RED PLANET" />
            <ObjectPhoto photo={fotoProvisoria}/>
        </div>
    )
}