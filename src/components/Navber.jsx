import { React } from "react";

function Nav() {
  return <div>
  
  <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      

      <div className="text-white text-2xl font-bold">
        SomPay
      </div>


      <div className="hidden md:flex space-x-6">
        <a href="#" class="text-white hover:text-gray-300">Home</a>
        <a href="#" class="text-white hover:text-gray-300">About</a>
        <a href="#" class="text-white hover:text-gray-300">Profile</a>
      </div>

    
      <div className="relative">
        <input 
          type="text" 
          class="px-4 py-2 rounded-full text-black focus:outline-none" 
          placeholder="Search..."
        />
        <button className="absolute right-0 top-0 mt-2 mr-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3a8 8 0 11-1.1 15.9A8.063 8.063 0 0111 3z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.197-5.197" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  </div>
}

export default Nav;