import cookiePic from "../Media/cookie.png"
import "../CSS/CookieSheet.css"
import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

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
                        {/* Rolling Pin */}
                    <Card className="cardColor" border="light">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Rolling Pin</Card.Title>
                            <Card.Text>
                                Helps you chip away at the cookie. +1 per click. <br/> <b>Cost: 20 Cookies</b>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                        {/* Pickaxe */}
                    <Card className="cardColor" border="light">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Pickaxe</Card.Title>
                            <Card.Text>
                                Helps you chip away at the cookie. +1 per click. <br/> <b>Cost: 20 Cookies</b>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                        {/* Drill */}
                    <Card className="cardColor" border="light">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Drill</Card.Title>
                            <Card.Text>
                                Helps you chip away at the cookie. +1 per click. <br/> <b>Cost: 20 Cookies</b>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                        {/* Plasma Cutter */}
                    <Card className="cardColor" border="light">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Plasma Cutter</Card.Title>
                            <Card.Text>
                                Helps you chip away at the cookie. +1 per click. <br/> <b>Cost: 20 Cookies</b>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                        {/* Lightsaber */}
                    <Card className="cardColor" border="light">
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Lightsaber</Card.Title>
                            <Card.Text>
                                Helps you chip away at the cookie. +1 per click. <br/> <b>Cost: 20 Cookies</b>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CookieSheet;