import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import "./App.css";

const App = () => {
  let users = [
    { lastName: "Ergeshbaev", age: 16, id: "" },
    { lastName: "Ergeshbaev", age: 16, id: "" },
    { lastName: "Ergeshbaev", age: 16, id: "" },
    { lastName: "Ergeshbaev", age: 16, id: "" },
    { lastName: "Ergeshbaev", age: 16, id: "" },
  ];
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
