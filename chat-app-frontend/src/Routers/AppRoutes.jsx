import { Route,Routes} from "react-router";
import { React } from "react";
import App  from "../App";
function AppRoutes(){

    return(
        <div>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/chat' element={<h1>This is a chat App</h1>}></Route>
                <Route path='/about' element={<h1>This is a About page of App</h1>}></Route>  
                <Route path='/*' element={<h1>404 Not Found</h1>}></Route>       
            </Routes>
        </div>
    );
};
export default AppRoutes;