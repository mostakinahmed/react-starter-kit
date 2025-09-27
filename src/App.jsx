import { React, useState } from "react";
import Nav from "./components/Navber";
import Form from "./components/Form.jsx";
import Count from "./components/Count.jsx";
import Card from "./components/Card.jsx";
import Product from "./components/Product.jsx";
import axios from "axios";

//data set from api
const data = [
  {
    name: "John Doe",
    phone: "+123 456 7890",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/053/741/746/small/a-colorful-lizard-with-a-blue-and-orange-face-is-staring-at-the-camera-the-lizard-s-face-is-the-main-focus-of-the-image-and-it-is-curious-or-alert-the-bright-colors-of-the-lizard-s-face-photo.jpg",
    address: "123 Main Street, City, Country",
    gender: "Male",
  },
  {
    name: "Jane Smith",
    phone: "+987 654 3210",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBBhCYk-JUtqmalln33uDSKYC-r3QTjin1SCvVP0qR2CiRybOCKug7UUVX-YgnexkGl0&usqp=CAU",
    address: "456 Elm Street, Town, Country",
    gender: "Female",
  },
  {
    name: "Alice Johnson",
    phone: "+555 123 4567",
    image:
      "https://thumbs.dreamstime.com/b/green-geko-lizard-orange-head-leaf-174560290.jpg",
    address: "789 Oak Avenue, Metropolis, Country",
    gender: "Female",
  },
  {
    name: "Bob Brown",
    phone: "+111 222 3333",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    address: "321 Pine Road, Village, Country",
    gender: "Male",
  },
  {
    name: "Charlie White",
    phone: "+444 555 6666",
    image:
      "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    address: "101 Maple Lane, Suburb, Country",
    gender: "Male",
  },
];

function App() {
  const [pData, setpData] = useState([]);
  // fake api -test axios
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setpData(res.data);
  
  };

  return (
    <>
      <Nav />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        {data.map((ele) => (
          <Card user={ele} />
        ))}
      </div>

      <button
        onClick={getData}
        className="bg-blue-600 ml-8 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Get Data
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        {pData.map((element) => (
          <Product pData={element} />
        ))}
      </div>

      <Count />
      <Form />
    </>
  );
}

export default App;
