import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFlights, fetchFligtsBySearch } from "../Features/flights/flightsSlice";
import Flight from "./Flight";

const FlightSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [numPassengers, setNumPassengers] = useState(1);
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    // const searchFormData = {
    //   to,
    //   from,
    //   departureDate,
    //   returnDate,
    //   numPassengers,
    // };


   dispatch(fetchFligtsBySearch(to,from,departureDate,returnDate))
   .then(response=> console.log(response))

 
    
  };

 
  return (
    <Container className="mt-3 ">
      <h1>Search your flights here ...</h1>
      <Form onSubmit={handleSearch} className="mt-5">
        <Row className="pt-3 pb-2">
          <Col md={3} className="mb-3 mb-md-0">
            <Form.Label className="fw-bold">From</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter origin city"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              required
            />
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <Form.Label className="fw-bold">To</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination city"
              value={to}
              onChange={(event) => setTo(event.target.value)}
              required
            />
          </Col>
          <Col md={2} className="mb-3 mb-md-0">
            <Form.Label className="fw-bold">Departure</Form.Label>
            <div className="position-relative">
              <Form.Control
                type="date"
                placeholder="dd/mm/yyyy"
                value={departureDate}
                onChange={(event) => setDepartureDate(event.target.value)}
                required
              />
              <span className="position-absolute top-50 translate-middle">
                <FaRegCalendarAlt />
              </span>
            </div>
          </Col>
          <Col md={2} className="mb-3 mb-md-0">
            <Form.Label className="fw-bold">Return</Form.Label>
            <div className="position-relative">
              <Form.Control
                type="date"
                placeholder="dd/mm/yyyy"
                value={returnDate}
                onChange={(event) => setReturnDate(event.target.value)}
              />
              <span className="position-absolute top-50 translate-middle">
                <FaRegCalendarAlt />
              </span>
            </div>
          </Col>
          <Col md={2} className="mb-3 mb-md-0">
            <Form.Label className="fw-bold">Travellers &amp; Class</Form.Label>
            <div className="position-relative">
              <Form.Control
                type="number"
                placeholder="1"
                value={numPassengers}
                onChange={(event) => setNumPassengers(event.target.value)}
                min={1}
              />
              <span className="position-absolute top-50 translate-middle">
                <FaRegUser />
              </span>
            </div>
          </Col>
          <Col md={12} className="mt-2 text-center">
            <Button type="submit" className="btn-lg px-5 btn-info mt-2">
              Search Flights
            </Button>
          </Col>
        </Row>
      </Form>

      <Flight />
    </Container>
  );
};
export default FlightSearch;
