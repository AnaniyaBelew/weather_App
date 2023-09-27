import '../src/App.css'
import Weather from './components/WeatherComponent/WeatherComp';
import Search from './components/searchComponent/SearchComponent';
function App() {
  return (
    <div className="App">
      <Search/>
      <Weather/>
    </div>
  );
}

export default App;
