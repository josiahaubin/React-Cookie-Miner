import CookieSheet from './CookieSheet';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';
import '../CSS/App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="App-header">
          <Col xs>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>React Cookie Miner</h1>
          </Col>
        </Row>
        <CookieSheet />
      </Container>
    </div>
  );
}

export default App;
