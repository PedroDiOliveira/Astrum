import { BrowserRouter,
    Route,
    Routes
 } from "react-router-dom";

 import LandingPage from "../views/LandingPage"
 import UniverseLibrary from "../views/UniverseLibrary"
 import NotFound from "../views/NotFound";
 import InternalError from "../views/InternalError";

 export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={LandingPage}/>
                <Route path="/universe-library" Component={UniverseLibrary}/>
                <Route path="/not-found" Component={NotFound}/>
                <Route path="/internal-error" Component={InternalError}/>
            </Routes>
        </BrowserRouter>
    )
 }