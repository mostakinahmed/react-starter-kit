import React from "react";

//dynamic card component
const Card = ({ user: { name, phone, gender, image, address } }) => {
  return (
    <div className="flex justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-80 p-6 space-y-4">
        <div className="flex justify-center">
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        </div>

        <div className="text-center">
          <p className="text-gray-600">Phone: {phone}</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600">Address: {address}</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600">Gender: {gender}</p>
        </div>
      </div> //aa
    </div>
  );
};

export default Card;
