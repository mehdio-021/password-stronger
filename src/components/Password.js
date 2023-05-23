import React from "react";
import zxcvbn from "zxcvbn";

const Password = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  

  /* console.log(num); */

  const createPassLabel = () =>{
    switch (testResult.score) {
      case 0:
        return "خیلی ضعیف";
      case 1:
        return "ضعیف";
      case 2:
        return "متوسط";
      case 3:
        return "خوب";
      case 4:
        return "قوی";
      default:
        return "";
    }

  }

  const functionProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#ea1111";
      case 2:
        return "#ffad00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const channgePasswordColor = () => ({
    width: `${num}%`,
    background: functionProgressColor(),
    height: "15px",
  });
  return (
    <div>
      <div className="progress" style={{ height: "15px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={channgePasswordColor()}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p style={{ color: functionProgressColor() }}>{createPassLabel()}</p>
    </div>
  );
};

export default Password;
