import { useState } from "react";
import value1 from "../img/Best/value1.png";
import value2 from "../img/Best/value2.png";
import value3 from "../img/Best/value3.png";

export function Best() {
  let [state] = useState([
    {
      value: value1,
      title: "Daily Essentials",
      disc: "20% off everyday",
      btnText: "Shop now",
    },
    {
      value: value2,
      title: "GET UP TO",
      disc: "20% off",
      btnText: "Shop now",
    },
    {
      value: value3,
      title: "Special Discount",
      disc: "For all Items",
      btnText: "Shop now",
    },
  ]);
  return (
    <>
      <section id="Best">
        <div className="c-title">
          <p>Offers</p>
          <h1>Best Values</h1>
        </div>
        <div className="bestValues">
          {state.map((elem, i) => {
            return (
              <div className="best" key={i}>
                <img src={elem.value} alt="" />
                <div className="discount">
                  <div className="title">
                    <h1>{elem.title}</h1>
                  </div>
                  <div className="disc">
                    <p>{elem.disc}</p>
                  </div>
                  <div className="shop-now">
                    <button>{elem.btnText}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
