import { useContext } from "react";
import { placeContext } from "../contexts/place";

export default function PlaceList() {
  const { places } = useContext(placeContext);

  if (places) {
    return (
      <ul>
        {places.map((p) => {
          return <li key={p.id}>{p.country}</li>;
        })}
      </ul>
    );
  } else {
    return <></>;
  }
}
