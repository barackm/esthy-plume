import React from "react";
import { IconContext } from "react-icons";
import { ImArrowRight } from "react-icons/im";
const TextInput = ({ first, last, placeholder, type = "text", name }) => {
  const style = {
    borderTopLeftRadius: first && 6,
    borderTopRightRadius: first && 6,
    borderBottomWidth: last && 1,
    borderBottomLeftRadius: last && 6,
    borderBottomRightRadius: last && 6,
  };
  return (
    <div
      className={
        last ? "text-input-main-container last" : "text-input-main-container"
      }
      style={style}
    >
      <div className="input-wrapper">
        <input type={type} name={name} id="" placeholder={placeholder} />
      </div>
      {last && (
        <div className="btn-wrapper">
          <div className="icon-btn">
            <IconContext.Provider value={{ className: "input-icon" }}>
              <ImArrowRight />
            </IconContext.Provider>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInput;
