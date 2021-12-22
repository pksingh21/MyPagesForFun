import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function AnimationAppear(props) {
  let elem = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.set(elem, {
      opacity: 0,
    });
    gsap.to(elem, {
      scrollTrigger: {
        trigger: elem,
        toggleActions: "play pause reverse pause",
        scrub: 0,
      },
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
export default AnimationAppear;
