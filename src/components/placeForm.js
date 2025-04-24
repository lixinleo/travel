import { useContext, useState, useMemo } from "react";
import { placeContext } from "../contexts/place";
import countryList from "react-select-country-list";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import Select from "react-select";

const PlaceForm = () => {
  const { dispatch } = useContext(placeContext);

  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [startDate, setStartDate] = useState(new Date());

  const changeHandler = (value) => {
    setCountry(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let date = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear()
    
    if (country.value) {
      dispatch({
        type: "added",
        country: country.label,
        id: country.value,
        time: date
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <div className="row" >
        <div className="col-sm" >
          <Select
            options={options}
            value={country}
            onChange={changeHandler}
            placeholder="select a country"
            isSearchable={true}
            required
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <DatePicker
          selected={startDate}
          showYearDropdown
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-small">
          <input
            className="btn btn-primary"
            type="submit"
            value="add country"
          />
        </div>
      </div>
    </form>
  );
};

export default PlaceForm;
