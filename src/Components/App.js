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
        <Row>
          <Col xs className="App-header">
            <div className="Header-content">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="mr-5">React Cookie Miner</h1>
            </div>
          </Col>
        </Row>
        <CookieSheet />
      </Container>
    </div>
  );
}

export default App;
