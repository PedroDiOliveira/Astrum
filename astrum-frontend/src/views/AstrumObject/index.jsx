import "./styles.css"
import ObjectName from "../../components/AstrumObject/ObjectName"
import ObjectHeader from "../../components/AstrumObject/ObjectHeader"

export default function AstrumObject(){
    return(
        <div className="main-content">
            <ObjectHeader/>
            <ObjectName name="MARS" nickname="THE RED PLANET" />
        </div>
    )
}