import { useEffect, useState, useCallback } from "react";
import styles from "./CountryListCss/CountryList.module.css";
import axios from "axios";
import CountryListShimmerEffect from "./CountryListShimmerEffect";

const API_URL = "https://restcountries.com/v3.1/all"; // URL to fetch data

const CountryList = ({
  isDark,
  isAscending,
  setIsAscending,
  isClickedOrder,
  setIsClickedOrder,
}) => {
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const [countryData, setCountryData] = useState([]); // Fetched country data
  const [filteredCountries, setFilteredCountries] = useState([]); // Filtered country data
  const [sortedCountries, setSortedCountries] = useState([]); // Sorted country data

  // Pagination state
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 6,
  });

  const fetchCountries = async () => {
    try {
      const response = await axios.get(API_URL);
      setCountryData(response.data);
      setFilteredCountries(response.data);
      console.log("Data fetched successfully");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = useCallback((event) => {
    const value = event.target.value;
    setSearchValue(value);
  }, []);

  useEffect(() => {
    const filtered = countryData.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCountries(filtered);
    setSortedCountries(filtered);
  }, [searchValue, countryData]);

  const handleSorting = useCallback(() => {
    if (!isClickedOrder) return;

    const sorted = [...filteredCountries].sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      return isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setSortedCountries(sorted);
  }, [isAscending, isClickedOrder, filteredCountries]);

  useEffect(() => {
    handleSorting();
  }, [handleSorting]);

  const totalPages = Math.ceil(sortedCountries.length / pagination.itemsPerPage);
  const currentItems = sortedCountries.slice(
    (pagination.currentPage - 1) * pagination.itemsPerPage,
    pagination.currentPage * pagination.itemsPerPage
  );

  const handlePagination = (direction) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: Math.max(1, Math.min(prev.currentPage + direction, totalPages)),
    }));
  };

  const pageClick = (pageNumber) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: pageNumber,
    }));
  };

  return (
    <>
      {countryData.length ? (
        <div className={isDark ? styles["main-container-dark-mode"] : styles["main-container"]}>
          <input
            type="search"
            value={searchValue}
            onChange={handleSearch}
            className={isDark ? styles["dark-mode-search-bar"] : styles["search-bar"]}
            placeholder=" 🔍 Search for a country..."
          />
          <div className={isDark ? styles["dark-mode-semi"] : styles["semi-container"]}>
            {currentItems.map((country) => (
              <div
                className={isDark ? styles["dark-mode-country"] : styles["country-container"]}
                key={country.name.common}
              >
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                  className={isDark ? styles["dark-mode-flag"] : styles["country-flag"]}
                />
                <p className={isDark ? styles["dark-mode-name"] : styles["country-name"]}>
                  {country.name.common}
                </p>
                <p className={isDark ? styles["dark-mode-capital"] : styles["country-capital"]}>
                  <b>Capital:</b> {country.capital}
                </p>
                <p className={isDark ? styles["dark-mode-population"] : styles["country-population"]}>
                  <b>Population:</b> {country.population}
                </p>
                <p className={isDark ? styles["dark-mode-region"] : styles["country-region"]}>
                  <b>Region:</b> {country.region}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CountryListShimmerEffect isDark={isDark} />
      )}

      <div className={styles["pagination"]}>
        <button onClick={() => handlePagination(-1)} className={styles["pag-btn"]} disabled={pagination.currentPage === 1}>
          ◀️
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={pagination.currentPage === index + 1 ? styles["selected__page__btn"] : styles["pag-btn"]}
            onClick={() => pageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => handlePagination(1)} className={styles["pag-btn"]} disabled={pagination.currentPage === totalPages}>
          ▶️
        </button>
      </div>
    </>
  );
};

export default CountryList;
