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

  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!errors.product && !errors.quantity){
      setIsOrderSuccessful(true);   // Show popup
      setTimeout(() => setIsOrderSuccessful(false), 3000);
    }
  }

  return (
    <div
      className="bg-[url('/assets/pampers-bg.jpg')] bg-no-repeat bg-cover bg-cyan-700 min-h-screen flex justify-center items-center"
      role="main">
      <div className="mx-8 bg-white rounded-lg max-w-3xl w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative md:order-1 order-2">
          {isOrderSuccessful && <p className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm rounded-md px-4 py-2">Order is successful</p>}
          <h1 className="pt-12 text-center font-bold text-2xl text-cyan-800">
            Make Your Diaper Order
          </h1>
          <form className="p-8" onSubmit={handleSubmit}>
            <div>
              <label className="text-cyan-800 font-medium" htmlFor="product">
                Product Name
              </label>
              <br />
              <input
                className="border-2 border-solid border-cyan-700 rounded mt-1 p-2 w-full"
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
            <div className="my-8">
              <label className="text-cyan-800 font-medium" htmlFor="quantity">
                Quantity
              </label>
              <br />
              <input
                className="border-2 border-solid border-cyan-700 rounded mt-1 p-2 w-full"
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
            <div className="text-center">
              <button
                className={`${ errors.product || errors.quantity || !product || !quantity ? "bg-slate-400" : "bg-cyan-600"  } text-white py-2 px-4 rounded`}
                type="submit"
                disabled={ errors.product || errors.quantity || !product || !quantity }>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:order-2 order-1 rounded-r-lg bg-[url('/assets/pampers.jpg')] bg-no-repeat bg-cover h-64 md:h-auto">
        </div>
      </div>
    </div>
  );
}

export default App;
