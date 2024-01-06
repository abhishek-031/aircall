import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header.jsx";
import { AppContext } from "./context/AppContext.js";
import { useStore } from "./hooks/useStore.js";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";
import { useEffect } from "react";
import { GET_ALL_ACTIVITIES } from "./utility/ApiCalls.js";

const App = () => {
  const store = useStore();
  useEffect(() => {
    GET_ALL_ACTIVITIES(store.dispatch);
  }, []);
  return (
    <div className="container">
      <AppContext.Provider value={store}>
        <Header />
        <MainContent />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
