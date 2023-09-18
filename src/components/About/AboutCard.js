import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hevesi Tamas </span>
            from <span className="purple"> Mateszalka, Hungary.</span>
            <br /> I am a third-year student in the software development/testing department at MSZC.
            <br />
            Furthermore, in my spare time I like to program in all kinds of fields!
            <br />
            <br />
            I also like:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Vdieogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Play the piano/guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Ride a bike
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing makes me happier than spending all day on the computer programming to automatically do a task that I could do by hand in 10 seconds."{" "}
          </p>
          <footer className="blockquote-footer">Douglas Adams</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
