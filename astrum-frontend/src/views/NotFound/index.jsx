import "./styles.css"
import notFoundIcon from "../../assets/icons/notfound.svg"

export default function  NotFound(){
    return(
        <div className="container">
            <img src={notFoundIcon} alt="Not found" />
        </div>
    )
}