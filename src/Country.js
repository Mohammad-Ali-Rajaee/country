import { useParams } from "../node_modules/react-router-dom/dist/index";
import useFetch from "./useFetch";
import Button from "./Button";

const Country = ({ theme }) => {
  const { code } = useParams();
  const { countries, loading, error } = useFetch(
    "https://restcountries.com/v2/all"
  );

  const borderCountries = (arr) =>
    arr?.map((code, index) => {
      let country = countries.filter((el) => el.alpha3Code === code)[0];
      return (
        <Button
          path={"/country/" + code}
          className={`back-btn ${theme} h-8 w-max flex justify-between items-center rounded-md px-5`}
          text={country.name}
          additionalClass=""
          key={index}
        />
      );
    });

  function commafy(num) {
    if (num) {
      var str = num.toString().split(".");
      if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }
      return str.join(".");
    }
  }

  let currentCountry = [];
  if (countries) {
    currentCountry = countries.filter(
      (country) => country.alpha3Code === code
    )[0];
  }
  return (
    <div className="home-conatiner">
      {loading && <h2>Loading ...</h2>}
      {error && <h2>{error}</h2>}

      <div>
        <div className="main__header py-16">
          <Button
            className={`back-btn ${theme} w-24 flex justify-between items-center rounded-md px-5 py-2`}
            path={"/"}
            text="back"
            additionalClass="lnr lnr-arrow-left"
          />
        </div>
        {currentCountry && (
          <div className="main-content grid lg:grid-cols-2 gap-20">
            <figure className="w-full">
              <img
                src={currentCountry.flag}
                alt={`${currentCountry.name}'s flag`}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="country-detail py-10">
              <h2 className="font-extrabold text-2xl flex flex-col gap-7">
                {currentCountry.name}
              </h2>
              <div className="flex md:flex-wrap flex-col md:h-44 gap-y-2 text-sm py-4">
                <div className="info w-full md:w-1/2">
                  <strong>Native Name: </strong>
                  <span>{currentCountry.nativeName}</span>
                </div>
                <div className="info w-full md:w-1/2">
                  <strong>Population: </strong>
                  <span>{commafy(currentCountry.population)}</span>
                </div>
                <div className="info w-full md:w-1/2">
                  <strong>Region: </strong> <span>{currentCountry.region}</span>
                </div>
                <div className="info w-full md:w-1/2">
                  <strong>Sub Region: </strong>
                  <span>{currentCountry.subregion}</span>
                </div>
                <div className="info w-full md:w-1/2">
                  <strong>Capital: </strong>
                  <span>{currentCountry.capital}</span>
                </div>
                <div className="info w-full md:w-1/2">
                  <strong>Top Level Domain: </strong>
                  <span>{currentCountry.topLevelDomain}</span>
                </div>
                <div className="info w-full md:w-1/2">
                  <strong>Currencies: </strong>
                  <span>{currentCountry.currencies?.map((el) => el.name)}</span>
                </div>
                <div className="info w-full md:w-1/2">
                  <strong>Languages: </strong>
                  <span>
                    {currentCountry.languages?.map((el) => el.name + ", ")}
                  </span>
                </div>
              </div>
              <div className="border-countries flex flex-wrap gap-3">
                <strong>Border Countries: </strong>
                {borderCountries(currentCountry.borders)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
