import "./TestimonialSec.css";
import { useState, useRef } from 'react';

export default function Testimonial() {
    let [curr, change] = useState(0);
    let container = useRef();
    let fun_left = () => {
        console.log("worling");
        if(curr !== 0) {
            change(0);
        }
    }
    let fun_right = () => {
        if(curr !== 1050) {
            change(1050);
        }
    }
    let cont_style = {
        marginLeft: {curr}
    }
    return (
    <div className="Testimonial-cont">
      <div className="testimonial-title">Testimonials</div>
      <div className="testimonial-desp-cont">
        <div className="testimonial-desp">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
          voluptates nulla culpa repudiandae enim odit numquam est possimus
          accusamus sit labore et eum, iure beatae adipisci impedit modi harum
          obcaecati.
        </div>
        <div></div>
        <div className="testimonial-buttons">
          <button className="move-button" onClick={fun_left}>&larr;</button>
          <button className="move-button" onClick={fun_right}>&rarr;</button>
        </div>
      </div>
      <div className="testimonial-box-cont">
        <div className="vertical-cont" ref={container} style={cont_style}>
          <TestimonialBox num="1" />
          <TestimonialBox num="2" />
          <TestimonialBox num="3" />
          <TestimonialBox num="4" />
          <TestimonialBox num="5" />
          <TestimonialBox num="6" />
          <TestimonialBox num="7" />
        </div>
      </div>
    </div>
  );
}

function TestimonialBox(props) {
  return <div className="testimonial-box">{props.num}</div>;
}
