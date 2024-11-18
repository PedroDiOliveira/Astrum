import { BrowserRouter,
    Route,
    Routes
 } from "react-router-dom";

 import LandingPage from "../views/LandingPage"
 import UniverseLibrary from "../views/UniverseLibrary"

 export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={LandingPage}/>
                <Route path="/universe-library" Component={UniverseLibrary}/>
            </Routes>
        </BrowserRouter>
    )
 }