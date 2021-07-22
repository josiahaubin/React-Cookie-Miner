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
    const [siblingBought, setSiblingBought] = useState(false);
    const [friendBought, setFriendBought] = useState(false);
    const [dadBought, setDadBought] = useState(false);
    const [momBought, setMomBought] = useState(false);
    const [grandmaBought, setGrandmaBought] = useState(false);

    function buyItem(itemNum){
        switch (itemNum) {
            case 0:
                setMultiplier(multiplier + 1)
                setNumberOfCookies(numberOfCookies - rollingPinCost)
                setRollingPinCost(rollingPinCost + (multiplier + 1))
                break;

            case 1:
                setMultiplier(multiplier + 2)
                setNumberOfCookies(numberOfCookies - pickAxeCost)
                setPickAxeCost(pickAxeCost + (multiplier + 1))
                break;

            case 2:
                setMultiplier(multiplier + 4)
                setNumberOfCookies(numberOfCookies - drillCost)
                setDrillCost(drillCost + (multiplier + 1))
                break;

            case 3:
                setMultiplier(multiplier + 6)
                setNumberOfCookies(numberOfCookies - plasmaCutterCost)
                setPlasmaCutterCost(plasmaCutterCost + (multiplier + 1))
                break;

            case 4:
                setMultiplier(multiplier + 8)
                setNumberOfCookies(numberOfCookies - lightsaberCost)
                setLightsaberCost(lightsaberCost + (multiplier * 1))
                break;

            case 5:
                setSiblingBought(true);
                setMultiplier(multiplier - 100);
                setNumberOfCookies(numberOfCookies + 1000)
                break;

            case 6:
                setFriendBought(true);
                setMultiplier(multiplier - 200);
                setNumberOfCookies(numberOfCookies + 2000)
                break;

            case 7:
                setDadBought(true);
                setMultiplier(multiplier - 300);
                setNumberOfCookies(numberOfCookies + 3000)
                break;

            case 8:
                setMomBought(true);
                setMultiplier(multiplier - 400);
                setNumberOfCookies(numberOfCookies + 4000)
                break;

            case 9:
                setGrandmaBought(true);
                setMultiplier(multiplier - 1000);
                setNumberOfCookies(numberOfCookies + 10000)
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
                    <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Sibling</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+1000</b> cookies.<br/> <b>Cost: 100 Multiplier</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(5)} disabled={multiplier < 100 || siblingBought === true || multiplier - 100 === 0}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Friend</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+2000</b> cookies.<br/> <b>Cost: 200 Multiplier</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(6)} disabled={multiplier < 200 || friendBought === true || multiplier - 200 === 0}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Dad</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+3000</b> cookies.<br/> <b>Cost: 300 Multiplier</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(7)} disabled={multiplier < 300 || dadBought === true || multiplier - 300 === 0}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Mom</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+4000</b> cookies.<br/> <b>Cost: 400 Multiplier</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(8)} disabled={multiplier < 400 || momBought === true || multiplier - 400 === 0}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                        <Card className="card mb-1" border="light">
                            <Card.Body>
                                <Card.Title className="cardContents">Grandma</Card.Title>
                                <Card.Text className="cardContents">
                                    <b>+10000</b> cookies.<br/> <b>Cost: 1000 Multiplier</b>
                                </Card.Text>
                                <Button onClick={() => buyItem(9)} disabled={multiplier < 1000 || grandmaBought === true || multiplier - 1000 === 0}>Buy Me!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col xs={8}>
                    {/* Main */}
                    <div className="cookieArea">
                        <h1>Number of Cookies: {numberOfCookies}</h1>
                        <h6>Current Multiplier: {multiplier}</h6>
                        <img src={cookiePic} alt="Cookie" onClick={() => setNumberOfCookies(numberOfCookies + multiplier)} className="cookie"/>
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