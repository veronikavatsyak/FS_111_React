import { useEffect, useState } from "react";
import s from "./Counter.module.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (counter === 0) return;
    console.log("Counter equals zero");
    if (counter > 8) {
      setCounter(0);
    }
  }, [counter]);

  const handlePlusClick = () => {
    setCounter((prev) => prev + step);
  };
  const handleMinusClick = () => {
    setCounter((prev) => prev - step);
  };
  const handleResetClick = () => {
    setCounter(0);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <div className={s.flex}>
          <button onClick={handleMinusClick} className="btn">
            minus
          </button>
          <button onClick={handleResetClick} className="btn">
            reset
          </button>
          <button onClick={handlePlusClick} className="btn">
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
