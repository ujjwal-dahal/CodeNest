import { useState } from "react";
import "./Calculator.css";
import Button from "../Calculator/Button"; // Adjust the path if Button is in a different folder.

export default function Calculator() {
  const calculatorCharacters0 = ["C", "(", ")", "B"];
  const calculatorCharacters1 = [7, 8, 9, "x"];
  const calculatorCharacters2 = [4, 5, 6, "-"];
  const calculatorCharacters3 = [1, 2, 3, "+"];
  const calculatorCharacters4 = ["/", 0, ".", "="];

  const [enterValue, setEnterValue] = useState([]);
  const [result, setResult] = useState("");
  const [resultClick, setResultClick] = useState(false);

  function clickNumber(number) {
    setEnterValue([...enterValue, number]);
  }

  function evaluateData() {
    try {
      const expression = enterValue.join("").replace("x", "*");
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
      setResultClick(true);
    } catch (error) {
      setResult("Error");
    }
  }

  function removeLastElement() {
    setEnterValue((prev) => prev.slice(0, -1));
  }

  function clearAllData() {
    setEnterValue([]);
    setResult("");
    setResultClick(false);
  }

  function handleClick(item) {
    if (item === "=") {
      evaluateData();
    } else if (item === "C") {
      clearAllData();
    } else if (item === "B") {
      removeLastElement();
    } else {
      setResultClick(false);
      clickNumber(item);
    }
  }

  function finalResult() {
    return resultClick ? result : enterValue.join("");
  }

  return (
    <>
      <center><h1 className="title-name">codenest calculator</h1></center>
      <div className="main-container">
        <input type="text" value={finalResult()} readOnly />

        <div className="semi-container">
          {calculatorCharacters0.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
              className={item === "B" ? "greenButton" : null}
              id={item === "C" ? "redButton" : null}
            />
          ))}
        </div>

        <div className="semi-container">
          {calculatorCharacters1.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
            />
          ))}
        </div>

        <div className="semi-container">
          {calculatorCharacters2.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
            />
          ))}
        </div>

        <div className="semi-container">
          {calculatorCharacters3.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
            />
          ))}
        </div>

        <div className="semi-container">
          {calculatorCharacters4.map((item, index) => (
            <Button
              title={item}
              clickNumber={() => handleClick(item)}
              key={index}
              className={item === "=" ? "greenButton" : null}
            />
          ))}
        </div>
      </div>
    </>
  );
}
