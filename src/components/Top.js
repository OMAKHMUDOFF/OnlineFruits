import { useState } from "react";

import redapple from "../img/top/redapple.png";
import capsicum from "../img/top/capsicum.png";
import pear from "../img/top/pear.png";
import blueberry from "../img/top/blueberry.png";
import raspberry from "../img/top/raspberry.png";

export function Top() {
  let [state, setState] = useState([
    {
      id: 6,
      disc: 15,
      like: false,
      img: redapple,
      desc: "Available(in stock)",
      title: "Red Apple",
      price: 15,
      num: 1,
    },
    {
      id: 7,
      disc: 15,
      like: false,
      img: capsicum,
      desc: "Available(in stock)",
      title: "Capsicum",
      price: 15,
      num: 1,
    },
    {
      id: 8,
      disc: 15,
      like: false,
      img: pear,
      desc: "Available(in stock)",
      title: "Pears",
      price: 15,
      num: 1,
    },
    {
      id: 9,
      disc: 15,
      like: false,
      img: blueberry,
      desc: "Available(in stock)",
      title: "Blueberry",
      price: 15,
      num: 1,
    },
    {
      id: 10,
      disc: 15,
      like: false,
      img: raspberry,
      desc: "Available(in stock)",
      title: "Raspberry",
      price: 15,
      num: 1,
    },
  ]);

  function plus(obj) {
    setState(
      state.map((item) => {
        console.log(item);
        return item.id === obj.id ? { ...item, num: item.num + 1 } : item;
      })
    );
  }

  function minus(obj) {
    if (obj.num > 1) {
      setState(
        state.map((item, i) => {
          return item.id === obj.id ? { ...item, num: item.num - 1 } : item;
        })
      );
    } else {
      alert("Can't go below one");
    }
  }

  function like(obj) {
    setState(
      state.map((like) => {
        return like.id === obj.id ? { ...like, like: !like.like } : like;
      })
    );
  }

  return (
    <>
      <section id="Top">
        <div className="c-title">
          <p>For you</p>
          <h1>Top Vegetables & Fruits Products</h1>
        </div>
        <div className="r-cards">
          {state.map((elem) => {
            return (
              <div className="r-card" key={elem.id}>
                <div className="disc-like">
                  <div className="disc">
                    <p>{elem.disc}% off</p>
                  </div>
                  <div className="likes">
                    <button onClick={() => like(elem)}>
                      {elem.like ? (
                        <i className="fa-solid fa-heart"></i>
                      ) : (
                        <i className="fa-regular fa-heart"></i>
                      )}
                    </button>
                  </div>
                </div>
                <div className="product-img">
                  <img src={elem.img} alt="" />
                </div>
                <div className="r-title">
                  <div className="desc">
                    <p>{elem.desc}</p>
                  </div>
                  <div className="title">
                    <h3>{elem.title}</h3>
                  </div>
                  <div className="price">
                    <p>
                      ${parseInt(elem.price - (elem.disc / 100) * elem.price)}
                      <del>${elem.price}</del>
                    </p>
                  </div>
                </div>
                <div className="btns-cart">
                  <div className="r-btns">
                    <button onClick={() => minus(elem)}>-</button>
                    <div className="r-num">{elem.num}</div>
                    <button onClick={() => plus(elem)}>+</button>
                  </div>
                  <div className="r-cart">
                    <button>
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </button>
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
