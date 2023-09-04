// import { useState } from "react";

// import ginger from "../img/added/ginger.png";
// import figs from "../img/added/figs.png";
// import strawberry from "../img/added/strawberry.png";
// import eggplant from "../img/added/eggplant.png";
// import egg from "../img/added/egg.png";

export function Added({ cartBtn, switchBtns, like, stateAdd }) {
  // let [state, setState] = useState([
  //   {
  //     id: 11,
  //     disc: 15,
  //     like: false,
  //     img: ginger,
  //     desc: "Available(in stock)",
  //     title: "Ginger",
  //     price: 15,
  //     num: 1,
  //   },
  //   {
  //     id: 12,
  //     disc: 15,
  //     like: false,
  //     img: figs,
  //     desc: "Available(in stock)",
  //     title: "Figs",
  //     price: 15,
  //     num: 1,
  //   },
  //   {
  //     id: 13,
  //     disc: 15,
  //     like: false,
  //     img: strawberry,
  //     desc: "Available(in stock)",
  //     title: "Strawberry",
  //     price: 15,
  //     num: 1,
  //   },
  //   {
  //     id: 14,
  //     disc: 15,
  //     like: false,
  //     img: eggplant,
  //     desc: "Available(in stock)",
  //     title: "Eggplant",
  //     price: 15,
  //     num: 1,
  //   },
  //   {
  //     id: 15,
  //     disc: 15,
  //     like: false,
  //     img: egg,
  //     desc: "Available(in stock)",
  //     title: "Egg",
  //     price: 15,
  //     num: 1,
  //   },
  // ]);

  // function plus(obj) {
  //   setState(
  //     state.map((item) => {
  //       console.log(item);
  //       return item.id === obj.id ? { ...item, num: item.num + 1 } : item;
  //     })
  //   );
  // }

  // function minus(obj) {
  //   if (obj.num > 1) {
  //     setState(
  //       state.map((item, i) => {
  //         return item.id === obj.id ? { ...item, num: item.num - 1 } : item;
  //       })
  //     );
  //   } else {
  //     alert("Can't go below one");
  //   }
  // }

  // function like(obj) {
  //   setState(
  //     state.map((like) => {
  //       return like.id === obj.id ? { ...like, like: !like.like } : like;
  //     })
  //   );
  // }

  return (
    <>
      <section id="Added">
        <div className="c-title">
          <p>For you</p>
          <h1>Added New products</h1>
        </div>
        <div className="r-cards">
          {stateAdd.map((elem) => {
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
                    <button onClick={(e) => switchBtns(e, elem)} name="minus">
                      -
                    </button>
                    <div className="r-num">{elem.num}</div>
                    <button onClick={(e) => switchBtns(e, elem)} name="plus">
                      +
                    </button>
                  </div>
                  <div className="r-cart">
                    <button onClick={() => cartBtn(elem)}>
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
