import { useContext } from "react";
import { placeContext } from "../contexts/place";

export default function Nav() {
  const { places } = useContext(placeContext);
  return <h1>You have visited {places.length} places.</h1>;
}
