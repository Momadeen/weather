import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Hero from "./Sections/Hero";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </Provider>
  );
}

export default App;
