import cookiePic from "../Media/cookie.png"
import "../CSS/CookieSheet.css"
import { useState } from "react";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col'

function CookiePan() {
    const [numberOfCookies, setNumberOfCookies] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    return (
        <div>
            <Row>
                <Col xs={10}>
                    {/* Main */}
                    <div className="cookieArea">
                        <h1>Number of Cookies: {numberOfCookies}</h1>
                        <img src={cookiePic} alt="Cookie" onClick={() => setNumberOfCookies(numberOfCookies + multiplier)} className="cookie"/>
                    </div>
                </Col>
                <Col xs={2}>
                    {/* Sidebar */}
                    <div>

                    </div>
                </Col>
            </Row>
        </div>
        
    )
}

export default CookiePan;