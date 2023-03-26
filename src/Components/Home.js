import React from "react";
import travel from "../assets/Svg/travelling.svg";
import flight from "../assets/Svg/flight.svg";
import Typewriter from "typewriter-effect";
import "../assets/css/home.css";
const Home = () => {
  const messages = [
    "Looking for booking Flights ?",
    "Looking for booking Hotels ?",
    "Get Started here and fly to the World ❤️!",
  ];
  return (
    <div className="mt-5">
      <div className="container mt-5">
        <h1>Welcome to the Traveller Planning !</h1>
        <p>Get Started with Booking Flights and Searching for the hotles </p>
        <div className="container row">
          <div className="col-sm-12 col-md-4">
            <img src={travel} alt="travelling" />
          </div>
          <div className="col-md-2">
            <Typewriter
              options={{
                strings: messages,
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriter-h1",
              }}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <img src={flight} alt="flight" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
