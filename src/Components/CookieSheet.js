import cookiePic from "../Media/cookie.png"
import "../CSS/CookieSheet.css"
import { useState } from "react";
import { Row, Col, Card, Button, CardColumns } from "react-bootstrap";

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
                        {/* Rolling Pin */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Rolling Pin</Card.Title>
                                <Card.Text>
                                    Helps you break up pieces of the cookie. <b>+1</b> per click. <br/> <b>Cost: 20 Cookies</b>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        {/* Pickaxe */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Pickaxe</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+2</b> per click. <br/> <b>Cost: 40 Cookies</b>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        {/* Drill */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Drill</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+4</b> per click. <br/> <b>Cost: 60 Cookies</b>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        {/* Plasma Cutter */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Plasma Cutter</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+6</b> per click. <br/> <b>Cost: 80 Cookies</b>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        {/* Lightsaber */}
                        <Card className="cardColor mb-1" border="light">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>Lightsaber</Card.Title>
                                <Card.Text>
                                    Helps you chip away at the cookie. <b>+8</b> per click. <br/> <b>Cost: 100 Cookies</b>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CookieSheet;