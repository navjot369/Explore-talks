import "./EventSec.css";
import Img1 from "./Images/img1.jpeg";

export default function EventSec() {
  return (
    <div className="event-cont">
      <div className="event-title">
        Our <span className="in-red">Events</span>
      </div>
      <div className="event-box">
        <div className="event-left-cont">
          <div className="event-content">
            <div className="event-inner-title">Event 1</div>
            <div className="event-inner-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, voluptates nulla culpa repudiandae enim odit numquam est
              possimus accusamus sit labore et eum, iure beatae adipisci impedit
              modi harum obcaecati.
            </div>
            <button className="arrow-up">&#8599;</button>
          </div>
        </div>
        <div className="event-right-cont">
          <img src={Img1} alt="Event-display" className="img-event" />
        </div>
      </div>
    </div>
  );
}
