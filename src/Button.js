import { Link } from "../node_modules/react-router-dom/dist/index";

const Button = ({ path, text, className, additionalClass , handleClick }) => {
  return (
    <Link to={path} className={className} onClick={handleClick}>
      <span className={additionalClass}></span>
      <button> {text} </button>
    </Link>
  );
};

export default Button;
