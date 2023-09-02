import { useState } from "react";
import cat1 from "../img/category/cat1.png";
import cat2 from "../img/category/cat2.png";
import cat3 from "../img/category/cat3.png";
import cat4 from "../img/category/cat4.png";
import cat5 from "../img/category/cat5.png";
import cat6 from "../img/category/cat6.png";

export function Categor() {
  let [state] = useState([
    {
      img: cat1,
      category: "Vegetables & Fruits",
    },
    {
      img: cat2,
      category: "Grocery & Staples",
    },
    {
      img: cat3,
      category: "Daily & Eggs",
    },
    {
      img: cat4,
      category: "Beverages",
    },
    {
      img: cat5,
      category: "Snacks",
    },
    {
      img: cat6,
      category: "Home Care",
    },
  ]);

  return (
    <>
      <section id="Category">
        <div className="c-title">
          <p>Shop by</p>
          <h1>Categories</h1>
        </div>
        <div className="c-cards">
          {state.map((elem, i) => {
            return (
              <div className="c-card" key={i}>
                <div className="c-img">
                  <img src={elem.img} alt="" />
                </div>
                <div className="c-text">
                  <h4>{elem.category}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
