import React, { useState } from "react";
import "./EightBall.css";
import { choice } from "./helpers";

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("Black");

  function handleClick() {
    const { msg, color } = choice(answers);
    setMsg(msg);
    setColor(color);
  }

  function restart() {
    setMsg("Think of a Question");
    setColor("Black");
  }

  return (
    <>
      <div className="Eightball">
        <h1>Magic Eightball</h1>
        <div
          className="Eightball-screen"
          style={{ backgroundColor: color }}
          onClick={handleClick}
        >
          {" "}
          <h3>
            {" "}
            <span>{msg}</span>
          </h3>{" "}
        </div>
        <button onClick={restart}>Restart</button>
      </div>
    </>
  );
};

export default EightBall;
