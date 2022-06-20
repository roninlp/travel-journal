import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card item={item} key={item.id} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="container">{cards}</section>
    </div>
  );
}
