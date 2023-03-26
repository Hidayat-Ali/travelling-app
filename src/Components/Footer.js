import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/footer.css'
import logo from "../assets/images/logo.png"
const Footer = () => {
  return (
    <footer className="text-white" style={{background:'#ff7f50'}}>
      <Container className="py-3">
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h5>!We are We!</h5>
         
           <img src={logo} alt="company logo" width={400}/>
           
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary py-2">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0 h5">
                © {new Date().getFullYear()} Ahamadi IT Creations And Solutions. All rights
                reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

