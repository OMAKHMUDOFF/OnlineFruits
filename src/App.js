import { useState } from "react";
import { Added } from "./components/Added";
import { Best } from "./components/Best";
import { Categor } from "./components/Categor";
import { Footer } from "./components/Footer";
import { Head } from "./components/Head";
import { Nav } from "./components/Nav";
import { Rec } from "./components/Rec";
import { Top } from "./components/Top";
import "./style/style.css";
import { Cart } from "./components/Cart";
import { Liked } from "./components/Liked";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import redapple from "./img/top/redapple.png";
import capsicum from "./img/top/capsicum.png";
import pear from "./img/top/pear.png";
import blueberry from "./img/top/blueberry.png";
import raspberry from "./img/top/raspberry.png";

import ginger from "./img/added/ginger.png";
import figs from "./img/added/figs.png";
import strawberry from "./img/added/strawberry.png";
import eggplant from "./img/added/eggplant.png";
import egg from "./img/added/egg.png";

import apricot from "./img/rec/apricot.png";
import cucumber from "./img/rec/cucumber.png";
import nuts from "./img/rec/nuts.png";
import brokoli from "./img/rec/brokoli.png";
import quince from "./img/rec/quince.png";

function App() {
  let [state, setState] = useState({
    rec: [
      {
        id: 1,
        disc: 15,
        like: false,
        img: apricot,
        desc: "Available(in stock)",
        title: "Fresh organic apricot",
        price: 15,
        num: 1,
        category: "rec",
      },
      {
        id: 2,
        disc: 15,
        like: false,
        img: cucumber,
        desc: "Available(in stock)",
        title: "Cucumber",
        price: 15,
        num: 1,
        category: "rec",
      },
      {
        id: 3,
        disc: 15,
        like: false,
        img: nuts,
        desc: "Available(in stock)",
        title: "Hazelnuts filbert nut",
        price: 15,
        num: 1,
        category: "rec",
      },
      {
        id: 4,
        disc: 15,
        like: false,
        img: brokoli,
        desc: "Available(in stock)",
        title: "raw broccoli",
        price: 15,
        num: 1,
        category: "rec",
      },
      {
        id: 5,
        disc: 15,
        like: false,
        img: quince,
        desc: "Available(in stock)",
        title: "Organic quince",
        price: 15,
        num: 1,
        category: "rec",
      },
    ],
    top: [
      {
        id: 6,
        disc: 15,
        like: false,
        img: redapple,
        desc: "Available(in stock)",
        title: "Red Apple",
        price: 15,
        num: 1,
        category: "top",
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
        category: "top",
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
        category: "top",
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
        category: "top",
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
        category: "top",
      },
    ],
    added: [
      {
        id: 11,
        disc: 15,
        like: false,
        img: ginger,
        desc: "Available(in stock)",
        title: "Ginger",
        price: 15,
        num: 1,
        category: "added",
      },
      {
        id: 12,
        disc: 15,
        like: false,
        img: figs,
        desc: "Available(in stock)",
        title: "Figs",
        price: 15,
        num: 1,
        category: "added",
      },
      {
        id: 13,
        disc: 15,
        like: false,
        img: strawberry,
        desc: "Available(in stock)",
        title: "Strawberry",
        price: 15,
        num: 1,
        category: "added",
      },
      {
        id: 14,
        disc: 15,
        like: false,
        img: eggplant,
        desc: "Available(in stock)",
        title: "Eggplant",
        price: 15,
        num: 1,
        category: "added",
      },
      {
        id: 15,
        disc: 15,
        like: false,
        img: egg,
        desc: "Available(in stock)",
        title: "Egg",
        price: 15,
        num: 1,
        category: "added",
      },
    ],
  });

  function switchBtns(e, obj) {
    switch (e.target.name) {
      case "plus":
        setState({
          ...state,
          [obj.category]: state?.[obj.category].map((item) => {
            return item.id === obj.id ? { ...item, num: item.num + 1 } : item;
          }),
        });
        break;
      case "minus":
        if (obj.num > 1) {
          setState({
            ...state,
            [obj.category]: state?.[obj.category].map((item) => {
              return item.id === obj.id ? { ...item, num: item.num - 1 } : item;
            }),
          });
          break;
        } else {
          toast.error("No less than one product!", {
            pauseOnHover: false,
          });
        }
      default:
        break;
    }
  }

  function like(obj) {
    setState({
      ...state,
      [obj.category]: state?.[obj.category].map((item) => {
        return item.id === obj.id ? { ...item, like: !item.like } : item;
      }),
    });
  }

  let [cart, setCart] = useState([]);
  function cartWin(obj) {
    if (cart.filter((item) => item.id === obj.id).length === 0) {
      setCart([...cart, obj]);
    } else {
      toast.error("The product is already in the cart", {
        position: "top-right",
        theme: "colored",
        pauseOnHover: false,
        closeOnClick: false,
        draggable: true,
        autoClose: 2000,
      });
    }
  }

  let [activeWin, setActiveWin] = useState({
    like: false,
    cart: false,
  });

  function cartActive() {
    setActiveWin({ ...activeWin, cart: !activeWin.cart });
  }
  function likeActive() {
    setActiveWin({ ...activeWin, like: !activeWin.like });
  }

  function closeCart() {
    setActiveWin({ ...activeWin, cart: !activeWin.cart });
  }
  function closeLike() {
    setActiveWin({ ...activeWin, like: !activeWin.like });
  }

  return (
    <>
      <div className="container">
        <ToastContainer />
        <Liked
          data={[...state.rec, ...state.top, ...state.added]}
          cartBtn={cartWin}
          like={like}
          switchBtns={switchBtns}
          activeWin={activeWin.like}
          closeLike={closeLike}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          activeWin={activeWin.cart}
          closeCart={closeCart}
        />
        <Nav
          cart={cart}
          activeBtn={cartActive}
          inLiked={
            [...state.rec, ...state.top, ...state.added].filter((e) => e.like)
              .length
          }
          likeActive={likeActive}
        />
        <Head />
        <Categor />
        <Rec
          like={like}
          // minus={minus}
          // plus={plus}
          // state={state}
          switchBtns={switchBtns}
          stateRec={state.rec}
          setState={setState}
          cartBtn={cartWin}
        />
        <Best />
        <Top
          like={like}
          // minus={minus}
          // plus={plus}
          switchBtns={switchBtns}
          stateTop={state.top}
          setState={setState}
          cartBtn={cartWin}
        />
        <Added
          like={like}
          // minus={minus}
          // plus={plus}
          switchBtns={switchBtns}
          stateAdd={state.added}
          setState={setState}
          cartBtn={cartWin}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
