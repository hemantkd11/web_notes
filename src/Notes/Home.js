import React, { useEffect, useMemo, useState } from "react";

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isRunning]);
  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  const handleresetAndStop = () => {
    setSeconds(0);
  };
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);
  return (
    <div className="home_container">
      <div className="home_box">
        <div className="img_container">
          <div className="img_box">
            Discover_More
            {seconds}
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleresetAndStop}>reset</button>
            {/* <img src="/3665927.png" />
            <img src="/3665921.png" /> */}
          </div>
          <p>Count: {count}</p>
          <p>Result: {result}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <div className="welcome_container">
          <div className="welcome_box">Welcome</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
