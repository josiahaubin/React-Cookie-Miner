import cookiePic from "../Media/cookie.png"
import "../CSS/CookieSheet.css"
import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function CookieSheet() {
    const [numberOfCookies, setNumberOfCookies] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    function updateNumberOfCookies(){
        setNumberOfCookies(numberOfCookies + multiplier)
    }

    function buyItem(itemNum){
        switch (itemNum) {
            case 0:
                setMultiplier(multiplier + 1)
                break;

            case 1:
                setMultiplier(multiplier + 2)
                break;

            case 2:
                setMultiplier(multiplier + 4)
                break;

            case 3:
                setMultiplier(multiplier + 6)
                break;

            case 4:
                setMultiplier(multiplier + 8)
                break;
        
            default:
                break;
        }
    }

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
                        <h6>Current Multiplier: {multiplier}</h6>
                        <img src={cookiePic} alt="Cookie" onClick={() => updateNumberOfCookies()} className="cookie"/>
                    </div>
                </Col>
                <Col xs={2}>
                    {/* Sidebar */}
                        {/* Rolling Pin */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Body>
                                <Card.Title>Rolling Pin</Card.Title>
                                <Card.Text>
                                    Helps you break up pieces of the cookie. <b>+1</b> per click. <br/> <b>Cost: 20 Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(0)}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Pickaxe */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Body>
                                <Card.Title>Pickaxe</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+2</b> per click. <br/> <b>Cost: 40 Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(1)}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Drill */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Body>
                                <Card.Title>Drill</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+4</b> per click. <br/> <b>Cost: 60 Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(2)}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Plasma Cutter */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Body>
                                <Card.Title>Plasma Cutter</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+6</b> per click. <br/> <b>Cost: 80 Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(3)}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Lightsaber */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Body>
                                <Card.Title>Lightsaber</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+8</b> per click. <br/> <b>Cost: 100 Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(4)}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CookieSheet;