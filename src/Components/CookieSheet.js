import cookiePic from "../Media/cookie.png"
import "../CSS/CookieSheet.css"
import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function CookieSheet() {
    const [numberOfCookies, setNumberOfCookies] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [rollingPinCost, setRollingPinCost] = useState(20);
    const [pickAxeCost, setPickAxeCost] = useState(40);
    const [drillCost, setDrillCost] = useState(60);
    const [plasmaCutterCost, setPlasmaCutterCost] = useState(80);
    const [lightsaberCost, setLightsaberCost] = useState(100);

    function updateNumberOfCookies(){
        setNumberOfCookies(numberOfCookies + multiplier)
    }

    function buyItem(itemNum){
        switch (itemNum) {
            case 0:
                setMultiplier(multiplier + 1)
                setNumberOfCookies(numberOfCookies - rollingPinCost)
                setRollingPinCost(rollingPinCost * (multiplier + 1))
                break;

            case 1:
                setMultiplier(multiplier + 2)
                setNumberOfCookies(numberOfCookies - pickAxeCost)
                setPickAxeCost(pickAxeCost * (multiplier + 1))
                break;

            case 2:
                setMultiplier(multiplier + 4)
                setNumberOfCookies(numberOfCookies - drillCost)
                setDrillCost(drillCost * (multiplier + 1))
                break;

            case 3:
                setMultiplier(multiplier + 6)
                setNumberOfCookies(numberOfCookies - plasmaCutterCost)
                setPlasmaCutterCost(plasmaCutterCost * (multiplier + 1))
                break;

            case 4:
                setMultiplier(multiplier + 8)
                setNumberOfCookies(numberOfCookies - lightsaberCost)
                setLightsaberCost(lightsaberCost * (multiplier * 1))
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
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Rolling Pin</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+1</b> per click. <br/> <b>Cost: {rollingPinCost} Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(0)} disabled={numberOfCookies < rollingPinCost}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Pickaxe */}
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Pickaxe</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+2</b> per click. <br/> <b>Cost: {pickAxeCost} Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(1)} disabled={numberOfCookies < pickAxeCost}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Drill */}
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Drill</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+4</b> per click. <br/> <b>Cost: {drillCost} Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(2)} disabled={numberOfCookies < drillCost}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Plasma Cutter */}
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Plasma Cutter</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+6</b> per click. <br/> <b>Cost: {plasmaCutterCost} Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(3)} disabled={numberOfCookies < plasmaCutterCost}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        {/* Lightsaber */}
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Lightsaber</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+8</b> per click. <br/> <b>Cost: {lightsaberCost} Cookies</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(4)} disabled={numberOfCookies < lightsaberCost}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CookieSheet;