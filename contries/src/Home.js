import { useState } from "react";
import CardHandler from "./CardHandler";

const Home = ({ countries, loading, error, theme }) => {
  const [searching, setSearching] = useState("");
  const [regionList, setRegionList] = useState([]);

  const [searched, setSearched] = useState(null);
  const [region, setRegion] = useState([]);

  function handleDropdown() {
    const list = document.getElementById("list");
    list.classList.toggle("hidden");
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearching(e.target.value);
    setSearched(
      (region.length > 0 ? region : countries)?.filter(
        (country) =>
          country.name?.toLowerCase().includes(e.target.value) ||
          country.capital?.toLowerCase().includes(e.target.value)
      )
    );
  }

  countries?.map((el) => {
    if (!regionList.includes(el.region)) {
      setRegionList([...regionList, el.region]);
    }
    return region;
  });

  function handleRegion(e) {
    setRegion([]);
    setSearching("");
    setSearched([]);
    countries
      ?.filter((el) => el.region === e.target.textContent)
      .map((el) => {
        return setRegion((region) => [...region, el]);
      });
  }
  return (
    <div className="home-conatiner">
      <div
        className={`main__header flex justify-between py-10 flex-wrap gap-10`}
      >
        <form
          className={`${theme} flex items-center rounded-md w-full md:max-w-xs`}
        >
          <button
            type="submit"
            className="lnr lnr-magnifier flex items-center justify-center font-semibold h-full"
          ></button>
          <input
            type="text"
            className="w-full focus:outline-none"
            placeholder="Search for a country..."
            onChange={handleSearch}
            value={searching}
          />
        </form>
        <div
          className={`p-dropdown ${theme} cursor-pointer relative flex justify-between rounded-md w-full md:max-w-1/2`}
          onClick={handleDropdown}
        >
          <div className="select flex justify-between items-center px-2">
            <span id="selected">America</span>
          </div>
          <span className="lnr lnr-chevron-down px-2 flex items-center"></span>
          <ul className="options hidden absolute rounded-md" id="list">
            {regionList?.map((el, index) => {
              return (
                <li
                  className="option p-2 cursor-pointer"
                  value={el}
                  onClick={handleRegion}
                  key={index}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {countries && (
        <div className="main__content grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10 pb-32">
          <CardHandler
            countries={
              searched?.length > 0
                ? searched
                : region.length > 0
                ? region
                : countries
            }
            theme={theme}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
