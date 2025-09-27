import React from "react";

const product = ({
  pData: { title, description, rating, image, price, category },
}) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 m-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain bg-gray-100 p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>

        <p className="text-green-600 font-bold mt-3">${price}</p>
        <p className="text-sm text-gray-500 italic mt-1">{category}</p>
        <p className="text-yellow-500 mt-1">
          ⭐ {rating.rate} ({rating.count})
        </p>
      </div>
    </div>
  );
};

export default product;
