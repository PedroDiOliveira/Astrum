import { BrowserRouter,
    Route,
    Routes
 } from "react-router-dom";

 import LandingPage from "../views/LandingPage"
 import UniverseLibrary from "../views/UniverseLibrary"
 import NotFound from "../views/NotFound";
 import InternalError from "../views/InternalError";
 import ThemeLibrary from "../views/ThemeLibrary";
 import AstrumObject from "../views/AstrumObject";

 export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={LandingPage}/>
                <Route path="/universe-library" Component={UniverseLibrary}/>
                <Route path="/universe-library/*" Component={ThemeLibrary}/>
                <Route path="/not-found" Component={NotFound}/>
                <Route path="/internal-error" Component={InternalError}/>
                <Route path="/planets/*" Component={AstrumObject}/>
                <Route path="*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
    )
 }