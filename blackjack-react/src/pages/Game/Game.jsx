import { useState, useEffect } from "react";
import "./Game.css"

const Game = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false); // Hide the component after a delay (e.g., 3 seconds)
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`animated-component ${show ? 'show' : 'hide'}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem, deleniti earum numquam sit minus, natus animi quam commodi ullam in tempore tempora iure molestiae porro repudiandae incidunt, saepe odit!
    </div>
  );
};

export default Game;
