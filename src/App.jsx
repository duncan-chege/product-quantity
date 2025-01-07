import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    product: "",
    quantity: "",
  });

  const [errors, setErrors] = useState({
    product: false,
    quantity: false,
  });

  // Update the errors & values based on input validity
  const trackValues = (e) => {
    const { name, value } = e.target; // Destructures the name and value from e.target

    // Helper function to update state
    const updateState = (name, value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value, // Update the specific field
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value.trim() === "", // Set error if empty
      }));
    };

    // Allow only numbers in the quantity field
    if (name === "quantity") {
      // Allow only numbers in the quantity field
      if (/^\d*$/.test(value)) {
        updateState(name, value);
      }
    } else {
      // Handle the product field or any other field
      updateState(name, value);
    }
  };

  // Destructure product and quantity from the values object
  const { product, quantity } = values;

  return (
    <div
      className="bg-cyan-700 min-h-screen flex justify-center items-center"
      role="main">
      <div className="bg-white rounded-md max-w-md w-1/2">
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
              className="border-2 border-solid border-slate-400 rounded mt-1 p-2 w-full"
              type="text"
              id="product"
              value={product}
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
              className="border-2 border-solid border-slate-400 rounded mt-1 p-2 w-full"
              type="number"
              id="quantity"
              value={quantity}
              onChange={trackValues}
              name="quantity"
            />
            {errors.quantity && (
              <p className="text-sm text-red-600 pt-1">
                Quantity number is needed
              </p>
            )}
          </div>
          <div class="text-center">
            <button
              className={
                errors.product || errors.quantity || !product || !quantity
                  ? "px-4 bg-slate-400 text-white py-2 rounded"
                  : "px-4 bg-cyan-600 text-white py-2 rounded"
              }
              type="submit"
              disabled={
                errors.product || errors.quantity || !product || !quantity
              }>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
