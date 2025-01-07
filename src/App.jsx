import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-cyan-700 min-h-screen" role="main">
      <div className="bg-white rounded-md max-w-md">
        <h1 className="py-4 text-center font-bold text-2xl text-cyan-800">Enter Values</h1>
        <form className="p-6" onSubmit="">
          <div>
            <label className="text-cyan-800 font-medium" htmlFor="product">Product Name</label><br />
            <input className="border-2 border-solid border-slate-400 rounded mt-1 p-2" type="text" id="product" />
            <p className="text-sm text-red-600 pt-1">Product name is needed</p>
          </div>
          <div className="my-4">
            <label className="text-cyan-800 font-medium" htmlFor="quantity">Quantity</label><br />
            <input className="border-2 border-solid border-slate-400 rounded mt-1 p-2" type="number" id="quantity" />
            <p className="text-sm text-red-600 pt-1">Quantity value is needed</p>
          </div>
          <button className="px-4 bg-cyan-600 text-white py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
