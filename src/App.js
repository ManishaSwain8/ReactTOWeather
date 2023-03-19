import Search from "./components/search/search";
import "./App.css";
import { CurrentWeather } from "./components/search/currenteather/current-weather";
function App() {
  const handelOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="Container">
      <Search onSearchChange={handelOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
