import "./styles.css"
import internalError from "../../assets/icons/error/internal.svg"

export default function InternalError(){

    return(
        <div className="container">
            <img src={internalError} alt="Internal error" />
        </div>
    )
}