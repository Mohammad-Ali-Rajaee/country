import { Link } from "../node_modules/react-router-dom/dist/index";

const CardHandler = ({ countries, theme }) => {
  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  return countries?.map((country, index) => (
    <Link to={"/country/" + country.alpha3Code} key={index}>
      <div className={`p-card ${theme} rounded-md`}>
        <img
          src={country.flag}
          alt={`${country.name}'s flag`}
          className="rounded-t-md h-44 w-full object-cover"
        />
        <div className="p-card__content p-6 h-1/2">
          <h3 className="text-lg font-semibold">{country.name}</h3>
          <div className="p-card__detail py-2">
            <p>
              <strong>Population:</strong> {commafy(country.population)}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default CardHandler;
