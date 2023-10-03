import arr from "../mydata/cars";
import { useState } from "react";
import Newcars from "./newones";

export default function Correct() {
  const [cars, setCars] = useState([]);
  setCars(arr);

  return (
    <>
      {cars.slice(0, 4).map((item) => {
        return (
          <>
            <Newcars name={item.name} image={item.image} />;
          </>
        );
      })}
    </>
  );
}
