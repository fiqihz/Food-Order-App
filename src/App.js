import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div className="font-poppin">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
