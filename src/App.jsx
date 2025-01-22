import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/coffeeCard/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <div>
        <h1 className="text-6xl text-purple-700">
          Coffee Store:{coffees.length}
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {" "}
          {coffees.map((singleCoffee) => (
            <CoffeeCard
              key={singleCoffee._id}
              singleCoffee={singleCoffee}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
