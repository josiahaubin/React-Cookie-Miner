import cookiePic from "../Media/cookie.png"

import "../CSS/CookiePan.css"
import { useState } from "react";


function CookiePan() {
    const [numberOfCookies, setNumberOfCookies] = useState(0);

    return (
        <div className="cookieImg">
            <img src={cookiePic} alt="Cookie" onClick={() => setNumberOfCookies(numberOfCookies + 1)}/>
            
        </div>
    )
}

export default CookiePan;