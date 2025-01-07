import { useState } from "react";
import "./App.css";

function App() {
  const [errors, setErrors] = useState({
    product: false,
    quantity: false,
  });

  // Update the errors based on input validity
  const trackValues = (e) => {
    const { name, value } = e.target; // Destructures the name and value from e.target and updates only the corresponding field in the errors object.
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",  // Set error to true if input is empty
    }));
  };

  return (
    <div className="bg-cyan-700 min-h-screen" role="main">
      <div className="bg-white rounded-md max-w-md">
        <h1 className="py-4 text-center font-bold text-2xl text-cyan-800">
          Enter Values
        </h1>
        <form className="p-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-cyan-800 font-medium" htmlFor="product">
              Product Name
            </label>
            <br />
            <input
              className="border-2 border-solid border-slate-400 rounded mt-1 p-2"
              type="text"
              id="product"
              onChange={trackValues}
              name="product"
            />
            {errors.product && (
              <p className="text-sm text-red-600 pt-1">
                Product name is needed
              </p>
            )}
          </div>
          <div className="my-4">
            <label className="text-cyan-800 font-medium" htmlFor="quantity">
              Quantity
            </label>
            <br />
            <input
              className="border-2 border-solid border-slate-400 rounded mt-1 p-2"
              type="number"
              id="quantity"
              onChange={trackValues}
              name="quantity"
            />
            {errors.quantity && (
              <p className="text-sm text-red-600 pt-1">
                Quantity value is needed
              </p>
            )}
          </div>
          <button
            className={(errors.product || errors.quantity) ? "px-4 bg-slate-400 text-white py-2 rounded" : "px-4 bg-cyan-600 text-white py-2 rounded"}
            type="submit"
            disabled={errors.product || errors.quantity}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
