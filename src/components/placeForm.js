import { useContext, useState, useMemo } from "react";
import { placeContext } from "../contexts/place";
import countryList from "react-select-country-list";

import Select from "react-select";

const PlaceForm = () => {
  const { dispatch } = useContext(placeContext);

  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setCountry(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (country.value) {
      dispatch({
        type: "added",
        country: country.label,
        id: country.value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select
        options={options}
        value={country}
        onChange={changeHandler}
        placeholder="select a country"
        isSearchable={true}
        required
      />

      <input className="btn btn-primary" type="submit" value="add country" />
    </form>
  );
};

export default PlaceForm;
