import React from "react";
import { Col,Row,Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Flight = () => {
  const flights = useSelector(state=>state.flights)
  // console.log(flights)
  return (
    <div className="container-fluid mt-5 mb-5">
      <Card className="flight-card bg-white ">
      <Row noGutters className="mt-1">
        <Col sm={2}>
          <img src='https://images.pexels.com/photos/8215959/pexels-photo-8215959.jpeg?auto=compress&cs=tinysrgb&w=800' alt='logo' className="airline-logo" height={50}  width={70}/>
        </Col>
        <Col sm={3}>
          <div>
            <h6 className="airline-name">airline</h6>
            <p className="flight-code">flight.flightCode</p>
          </div>
        </Col>
        <Col sm={2}>
          <div>
            <h6>departureTime</h6>
            <p className="flight-airport">departure</p>
          </div>
        </Col>
        <Col sm={2}>
          <div>
            <h6>arrivalTime</h6>
            <p className="flight-airport">arrival</p>
          </div>
        </Col>
        <Col sm={2}>
          <div>
            <h6>duration</h6>
            <p className="flight-stops">stops</p>
          </div>
        </Col>
        <Col sm={1}>
          <div>
            <h6>price</h6>
            <p className="flight-type">Economy</p>
          </div>
        </Col>
        <Col sm={1}>
          <div>
            <button className="btn btn-secondary">Book</button>
          </div>
        </Col>
      </Row>
    </Card>
    </div>
  );
};

export default Flight;
