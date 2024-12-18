import { Route,Routes} from "react-router";
import { React } from "react";
import App  from "../App";
import FileNotFound from "../Components/FileNotFound"
import ChatPage from "../Components/ChatPage";
function AppRoutes(){

    return(
        <div>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/chat' element={<ChatPage />}></Route>
                <Route path='/about' element={<h1>This is a About page of App</h1>}></Route>  
                <Route path='/*' element={<FileNotFound />}></Route>       
            </Routes>
        </div>
    );
};
export default AppRoutes;