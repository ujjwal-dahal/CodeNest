import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import { toast } from "react-toastify";
import "./CurrencyConverter.scss";

export default function CurrencyConverter() {
  const currencyApiUrl = "https://api.frankfurter.app/currencies";

  const [currencyData, setCurrencyData] = useState([]);
  const [inputData, setInputData] = useState("");
  const fromCurrencyRef = useRef();
  const toCurrencyRef = useRef();
  const [convertedValue, setConvertedValue] = useState(null);
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromCurrency, setFromCurrency] = useState("INR");

  const CurrencyFetchApi = async () => {
    try {
      const response = await axios.get(currencyApiUrl);
      const data = response.data;
      setCurrencyData(Object.keys(data));
    } catch (error) {
      console.error("Error fetching currency data:", error);
      toast.error("Failed to fetch currency data.");
    }
  };

  useEffect(() => {
    CurrencyFetchApi();
  }, []);

  const convertHandle = async () => {
    if (!inputData) {
      toast.error("Input Field Shouldnot be Empty !");
    } else if (isNaN(inputData)) {
      toast.error("Invalid Input !");
    }

    try {
      const response = await axios.get(
        `https://api.frankfurter.app/latest?amount=${parseFloat(
          inputData
        )}&from=${fromCurrency}&to=${toCurrency}`
      );
      setConvertedValue(response.data.rates[toCurrency]);
    } catch (error) {
      console.error("Error converting currency:", error);
      toast.error("Failed to convert currency.");
    }
  };

  const convertCurrency = () => {
    const newFromCurrency = fromCurrencyRef.current.value;
    const newToCurrency = toCurrencyRef.current.value;

    
    if (!inputData) {
      toast.error("Input field should not be empty!");
      return;
    } else if (isNaN(inputData)) {
      toast.error("Invalid input amount!");
      return;
    } else if (newFromCurrency === newToCurrency) {
      toast.error("Both currencies are the same!");
      return;
    }

    
    setFromCurrency(newFromCurrency);
    setToCurrency(newToCurrency);
    convertHandle(); 
  };

  const changeCurrency = () => {
    const tempCurrency = fromCurrencyRef.current.value;
    fromCurrencyRef.current.value = toCurrencyRef.current.value;
    toCurrencyRef.current.value = tempCurrency;

    setFromCurrency(fromCurrencyRef.current.value);
    setToCurrency(toCurrencyRef.current.value);
  };

  return (
    <div
      id="main-container"
      className="flex flex-col items-center max-w-auto mx-auto p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl shadow-2xl border border-white backdrop-blur-lg"
    >
      <p className="text-5xl font-extrabold text-white tracking-wide mb-8">
        Currency Converter
      </p>
      <div id="input-box" className="flex flex-col w-full mb-8">
        <label htmlFor="input" className="mb-2 text-lg font-medium text-white">
          Amount
        </label>
        <input
          type="text"
          id="input"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          className="w-full h-12 px-4 bg-white bg-opacity-20 border border-white rounded-full text-white font-semibold focus:ring-4 focus:ring-pink-300 focus:outline-none transition-all duration-300 shadow-lg placeholder-gray-300"
          placeholder="Enter amount"
        />
      </div>

      <div
        id="dropdown-container"
        className="flex flex-row justify-between w-full items-center mb-8"
      >
        <div id="dropdown1">
          <p className="text-md font-bold text-white mb-2 text-center">From</p>
          <select
            ref={fromCurrencyRef}
            defaultValue={fromCurrency}
            className="w-36 h-12 bg-white bg-opacity-20 border border-white rounded-full text-white font-semibold focus:ring-4 focus:ring-pink-300 focus:outline-none transition-all duration-300 shadow-lg hover:bg-opacity-40 mr-6 text-center"
          >
            {currencyData.map((currency) => (
              <option value={currency} key={currency} className="text-black">
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div id="reverse" className="flex justify-center items-center">
          <button
            className="text-white hover:text-pink-300 transition-colors duration-300 transform hover:scale-110"
            onClick={changeCurrency}
          >
            <GoArrowSwitch className="text-5xl" id="reverse-icon" />
          </button>
        </div>

        <div id="dropdown2">
          <p className="text-md font-bold text-white mb-2 text-center">To</p>
          <select
            ref={toCurrencyRef}
            defaultValue={toCurrency}
            className="w-36 h-12 bg-white bg-opacity-20 border border-white rounded-full text-white font-semibold focus:ring-4 focus:ring-pink-300 focus:outline-none transition-all duration-300 shadow-lg hover:bg-opacity-40 ml-6 text-center"
          >
            {currencyData.map((currency) => (
              <option value={currency} key={currency} className="text-black">
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div id="convert-button" className="w-full flex justify-center mb-6">
        <button
          className="px-8 py-3 bg-white text-pink-500 font-bold rounded-full shadow-xl hover:bg-pink-500 hover:text-black hover:scale-105 transition-all duration-300 transform focus:ring-4 focus:ring-white"
          onClick={convertCurrency}
          id="button"
        >
          Convert
        </button>
      </div>

      <div id="amount" className="text-2xl font-semibold text-white mt-4">
        {convertedValue && inputData && (
          <p className="bg-white bg-opacity-20 px-5 rounded-full shadow-lg text-green-700 font-bold text-xl py-3">
            Converted Amount: {convertedValue.toFixed(2)} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}
