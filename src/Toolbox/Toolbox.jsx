// src/Toolbox.js

import styles from "./Toolbox.module.css";
import { useNavigate } from "react-router-dom";
import ToolboxContainer from "./ToolboxContainer";

export default function Toolbox() {
  const navigate = useNavigate();

  return (
    <div className={styles.toolboxContainer}>

      <div className={styles.toolsSection}>
        <ToolboxContainer
          title="Calculator"
          desc="A handy calculator to perform basic arithmetic operations."
          btnName="Open Calculator"
          clickBtn={() => navigate("/calculator")} 
        />

        <ToolboxContainer
          title="Currency Converter"
          desc="Quickly convert between various currencies in real-time."
          btnName="Open Currency Converter"
          clickBtn={() => navigate("/currencyconverter")}
        />

        
        <ToolboxContainer
          title="Unit Converter"
          desc="Convert between different units of length and weight."
          btnName="Open Unit Converter"
          clickBtn={() => navigate("/unitconverter")} 
        />

        <ToolboxContainer
          title="PDF Converter"
          desc="Convert Your Input Text Into PDF"
          btnName="Open PDF Converter"
          clickBtn={() => navigate("/pdf-converter")} 
        />

        <ToolboxContainer
          title="ToDo App"
          desc="Your Own Todo App"
          btnName="Open ToDo App"
          clickBtn={() => navigate("/todo")} 
        />

        <ToolboxContainer
          title="Password Generator"
          desc="You can generate password for U"
          btnName="Open Password Generator"
          clickBtn={() => navigate("/password-generator")} 
        />

        <ToolboxContainer
          title="Rock Scissor Paper"
          desc="You can Play Rock Scissor Paper game"
          btnName="Open Rock Scissor Paper game"
          clickBtn={() => navigate("/rock-scissor-paper")} 
        />

        <ToolboxContainer
          title="Random Number Guess Game"
          desc="You can Play Random Number Guess game"
          btnName="Open Random Number Guess game"
          clickBtn={() => navigate("/randomnumberguess")} 
        />


      </div>
    </div>
  );
}
