import cookiePic from "../Media/cookie.png"
import "../CSS/CookieSheet.css"
import { useState } from "react";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col'

function CookieSheet() {
    const [numberOfCookies, setNumberOfCookies] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    return (
        <div>
            <Row>
                <Col xs={2}>
                    {/* Sidebar */}
                    <div>
                        <h5>Sibling</h5>
                        <h5>Friend</h5>
                        <h5>Dad</h5>
                        <h5>Mom</h5>
                        <h5>Grandma</h5>
                    </div>
                </Col>
                <Col xs={8}>
                    {/* Main */}
                    <div className="cookieArea">
                        <h1>Number of Cookies: {numberOfCookies}</h1>
                        <img src={cookiePic} alt="Cookie" onClick={() => setNumberOfCookies(numberOfCookies + multiplier)} className="cookie"/>
                    </div>
                </Col>
                <Col xs={2}>
                    {/* Sidebar */}
                    <div>
                        <h5>Rolling Pin</h5>
                        <h5>Picaxe</h5>
                        <h5>Drill</h5>
                        <h5>Plasma Cutter</h5>
                        <h5>Lightsaber</h5>
                    </div>
                </Col>
            </Row>
        </div>
        
    )
}

export default CookieSheet;