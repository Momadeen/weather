import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Hero from "./Sections/Hero";
import Weather from "./Sections/Weather";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Hero />
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
