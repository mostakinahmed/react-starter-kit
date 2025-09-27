import { React, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   setUserName("");
  //   console.log("Form submitted");
  // };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const phone = e.target.phone.value;
          console.log("User Name: ", name + " User Phone: ", phone);

          setUserName("");
          setUserPhone("");
        }}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4 flex flex-col mx-auto mt-10"
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Contact Form
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              const data = e.target.value;
              setUserName(data);
              console.log(data);
            }}
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={userPhone}
            onChange={(e) => {
              const data = e.target.value;
              setUserPhone(data);
            }}
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default App;
