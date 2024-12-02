import "./styles.css"
import ReturnArrow from "../../ReusableComponents/ReturnArrow"

export default function ObjectHeader(){
    return(
        <div className="object-header">
            <ReturnArrow path={"/universe-library"} />
        </div>
    )
}