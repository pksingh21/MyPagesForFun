import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function AnimationRightLeft(props) {
  let elem = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let dist = props.dist ? props.dist : 20;
    gsap.set(elem, {
      y: props.direction === "down" ? -dist : dist,
      opacity: 0,
    });
    gsap.to(elem, {
      scrollTrigger: {
        trigger: elem,
        toggleActions: "play pause reverse pause",
        scrub: 0,
      },
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <div
      ref={(el) => {
        elem = el;
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}
export default AnimationRightLeft;
