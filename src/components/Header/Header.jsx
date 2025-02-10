import "./Header.css";

import PersonalBrand from "./PersonalBrand/PersonalBrand";
import NavigationMenu from "./Navigation/NavigationMenu";

const Header = () => {
  return (
    <div className="header-container">
      <PersonalBrand />
      <NavigationMenu />
    </div>
  );
};

export default Header;
