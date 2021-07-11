import { Provider } from "react-redux";
import "./App.css";
import Hero from "./Sections/Hero";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Hero />
      </div>
    </Provider>
  );
}

export default App;
