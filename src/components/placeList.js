import { useContext } from "react";
import { placeContext } from "../contexts/place";

export default function PlaceList() {
  const { places, dispatch } = useContext(placeContext);

  const handleDelete = (id) => {
    dispatch({
      type: "deleted",
      id: id
    });
  }

  if (places) {
    return (
      <ul>
        {places.map((p) => {
          return <li key={p.id}>
            <ul>
              <li key="1">Country: {p.country}</li>
              <li key="2">Visit Date: {p.time}</li>
              <li key="3"><button className="btn btn-warning" onClick={() => handleDelete(p.id)}>Delete</button></li></ul>
          </li>;
        })}
      </ul>
    );
  } else {
    return <></>;
  }
}
