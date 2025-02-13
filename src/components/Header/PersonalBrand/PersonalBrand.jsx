import "./PersonalBrand.css";

const PersonalBrand = () => {
  return (
    <div className="brand-container">
      {/* Place logo here */}
      <p>
        {"< "}
        <span className="initials">J</span>ohan{" "}
        <span className="initials">R</span>omeo
        {" />"}
      </p>
    </div>
  );
};

export default PersonalBrand;
