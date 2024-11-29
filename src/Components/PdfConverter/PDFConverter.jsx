import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import styles from "./PDFConverter.module.css";

const PDFConverter = () => {
  const [text, setText] = useState("");
  const [filename, setFilename] = useState("your-pdf-name.pdf");
  const contentRef = useRef();

  const handleDownload = () => {
    if (!text) return; 

    const element = contentRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: filename || "my-pdf.pdf", 
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait" },
      })
      .save();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>PDF Converter</h1>
      
      <input
        type="text"
        className={styles.input}
        id={styles["text-field"]}
        placeholder="Enter text to convert to PDF"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <input
        type="text"
        className={styles.input}
        placeholder="Enter filename (optional)"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
      />

      <div ref={contentRef} className={styles.content}>
        <h2>Converted Content:</h2>
        <p>{text || "Your input will appear here."}</p>
      </div>

      <button 
        className={styles.button} 
        onClick={handleDownload} 
        disabled={!text} 
      >
        Download as PDF
      </button>
    </div>
  );
};

export default PDFConverter;
