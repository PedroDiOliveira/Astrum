import { BrowserRouter,
    Route,
    Routes
 } from "react-router-dom";

 import LandingPage from "../views/LandingPage"

 export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" Component={LandingPage}/>
            </Routes>
        </BrowserRouter>
    )
 }