import React from "react";
import Lottie from "lottie-react";
import NotFound from "../assets/404NotFound.json"
function FileNotFound(){

    return(
        <>
            <Lottie animationData={NotFound}
             />
        </>
    )
}
export default FileNotFound;