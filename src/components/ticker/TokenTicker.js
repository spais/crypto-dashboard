import { useState, useEffect, useRef } from "react";
import { TokenDataLoader } from "./TokenDataLoader";
import "./ticker.styles.scss";
import { TokenInfo } from "./TokenInfo";

function TokenTicker() {
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(15);
  const elementWidth = useRef();

  useEffect(() => {
    const animate = setInterval(() => {
      setPosition((x) => x - 1);
    }, speed);
    console.log(position);
    return () => clearInterval(animate);
  }, [speed]);

  return (
    <div className="ticker">
      <div
        className="ticker__element"
        style={{
          willChange: "transform",
          position: "absolute",
          left: `${position}px`,
          top: 0,
        }}
        ref={elementWidth}
      >
        <div className="header-coins">
          <TokenDataLoader>
            <TokenInfo />
          </TokenDataLoader>
        </div>
      </div>
    </div>
  );
}

export default TokenTicker;
