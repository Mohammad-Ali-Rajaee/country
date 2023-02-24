import Button from "./Button";

const Header = ({ theme, handleMode }) => {
  return (
    <header className={`p-header ${theme} flex items-center justify-between`}>
      <div className="p-header__inner flex justify-between">
        <div className="logo text-2xl font-extrabold">Where in the world?</div>
        <div className="header-mode-container flex items-center">
          <Button
            handleClick={handleMode}
            className="font-semibold flex items-center gap-3"
            text={`${theme === "light" ? "Dark" : "Light"} Mode`}
            additionalClass={`lnr lnr-${
              theme === "light" ? "moon" : "sun"
            } font-semibold`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
