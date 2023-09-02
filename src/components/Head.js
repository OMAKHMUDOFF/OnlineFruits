import { useState } from "react";
import nuts from "../img/disc/Nuts.png";
import veg from "../img/disc/Vegetable.png";
import fruit from "../img/disc/Fruits.png";
export function Head() {
  let [state] = useState([
    {
      product: nuts,
      disc: "10% Off",
      desc: "Buy More & Save More",
      about: "Nuts & Snacks",
      btnTex: "Shop Now",
    },
    {
      product: veg,
      disc: "6% Off",
      desc: "Buy More & Save More",
      about: "Fresh Vegetables",
      btnTex: "Shop Now",
    },
    {
      product: fruit,
      disc: "25% Off",
      desc: "Buy More & Save More",
      about: "Fresh Fruits",
      btnTex: "Shop Now",
    },
  ]);

  return (
    <>
      <header>
        <div className="head">
          <div className="slider">
            {state.map((elem, i) => {
              return (
                <div key={i}>
                  <div className="slide">
                    <div className="prod-img">
                      <img src={elem.product} alt="" />
                    </div>
                    <div className="discount">
                      <div className="disc">
                        <h5>{elem.disc}</h5>
                      </div>
                      <div className="desc">
                        <p>{elem.desc}</p>
                      </div>
                      <div className="prod-about">
                        <p>{elem.about}</p>
                      </div>
                    </div>
                    <div className="shop-now">
                      <button>{elem.btnTex}</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
