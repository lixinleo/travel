import "./App.css";
import Nav from "./components/nav";
import PlaceForm from "./components/placeForm";
import PlaceList from "./components/placeList";
import PlaceContextProvider from "./contexts/place";

function App() {
  return (
    <div className="App">
      <PlaceContextProvider>
        <Nav />
        <PlaceList />

        <PlaceForm />
      </PlaceContextProvider>
    </div>
  );
}

export default App;
