import React, { useState } from 'react';
import styles from './PasswordGenerator.module.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (includeNumbers) {
      charset += '0123456789';
    }
    if (includeSymbols) {
      charset += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles.container}>
        <h1>Password Generator</h1>
        <div className={styles.password}>{password || 'Your password will appear here'}</div>

        <div className={styles.options}>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
          <label>
            Password Length:
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="4"
              max="32"
            />
          </label>
        </div>

        <button className={styles.button} onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
