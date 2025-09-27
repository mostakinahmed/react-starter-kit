import { React, useState } from "react";
import Nav from "./components/Navber";
import Form from "./components/Form.jsx";
import Count from "./components/Count.jsx";
import Card from "./components/Card.jsx";

//data set from api
const data = [
  {
    name: "John Doe",
    phone: "+123 456 7890",
    image: "https://via.placeholder.com/150",
    address: "123 Main Street, City, Country",
    gender: "Male",
  },
  {
    name: "Jane Smith",
    phone: "+987 654 3210",
    image: "https://via.placeholder.com/150",
    address: "456 Elm Street, Town, Country",
    gender: "Female",
  },
  {
    name: "Alice Johnson",
    phone: "+555 123 4567",
    image: "https://via.placeholder.com/150",
    address: "789 Oak Avenue, Metropolis, Country",
    gender: "Female",
  },
  {
    name: "Bob Brown",
    phone: "+111 222 3333",
    image: "https://via.placeholder.com/150",
    address: "321 Pine Road, Village, Country",
    gender: "Male",
  },
  {
    name: "Charlie White",
    phone: "+444 555 6666",
    image: "https://via.placeholder.com/150",
    address: "101 Maple Lane, Suburb, Country",
    gender: "Male",
  },
];

function App() {
  return (
    <>
      <Nav />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        {data.map((ele) => (
          <Card user={ele} />
        ))}
      </div>

      <Count />
      <Form />
    </>
  );
}

export default App;
