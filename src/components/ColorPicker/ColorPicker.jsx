import s from "./ColorPicker.module.css";
import colors from "../../assets/colors.json";
import { useState } from "react";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const handleChangeColor = (value) => {
    setCurrentColor(value);
  };
  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2>Current color: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map(({ id, color }) => {
            return (
              <li
                onClick={() => handleChangeColor(color)}
                key={id}
                className={s.item}
              >
                {color}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default ColorPicker;
