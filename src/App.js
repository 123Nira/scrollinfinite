import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [boxes, setBosex] = useState([{ bg: "#777" }]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBosex([
        ...boxes,
        { bg: "#" + ((Math.random() * 0xffffff) << 0).toString(16) }
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, [boxes]);

  return (
    <div className="hero">
      {boxes.map((box, index) => (
        <div key={index} className="box" style={{ background: box.bg }}>
          <p>{index}</p>
        </div>
      ))}
    </div>
  );
}
