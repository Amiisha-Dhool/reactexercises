import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  const [inputValue, setInputValue] = useState(""); 

  useEffect(() => {
    let timeId;

    if (isRuning && time > 0) {
      timeId = setInterval(() => {
        setTime((prev) => prev - 1); 
      }, 1000);
    }

    // haddii time = 0 istaji
    if (time === 0) {
      setIsRuning(false);
    }

    return () => clearInterval(timeId);
  }, [isRuning, time]);

  const handleStart = () => {
    setIsRuning(true);
  };

  const handleStop = () => {
    setIsRuning(false);
  };

  const handleReset = () => {
    setIsRuning(false);
    setTime(0);
    setInputValue("");
  };

  // input change → time ku shub
  const handleChange = (e) => {
    const value = Number(e.target.value);
    setInputValue(value);
    setTime(value);
  };

  return (
    <div>
      <h1>Count Down Timer</h1>

      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
      />

      <h2>Time left: {time} seconds</h2>

      <button
        onClick={handleStart}
        disabled={isRuning || time === 0}
      >
        Start
      </button>

      <button
        onClick={handleStop}
        disabled={!isRuning }
      >
        Stop
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;