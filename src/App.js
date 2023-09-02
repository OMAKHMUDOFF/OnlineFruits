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

// import redapple from "./img/top/redapple.png";
// import capsicum from "./img/top/capsicum.png";
// import pear from "./img/top/pear.png";
// import blueberry from "./img/top/blueberry.png";
// import raspberry from "./img/top/raspberry.png";

// import ginger from "./img/added/ginger.png";
// import figs from "./img/added/figs.png";
// import strawberry from "./img/added/strawberry.png";
// import eggplant from "./img/added/eggplant.png";
// import egg from "./img/added/egg.png";
// import { useState } from "react";

function App() {
  // let [state, setState] = useState({
  //   rec: [],
  //   top: [],
  //   added: [],
  // });

  // function plus(obj) {
  //   setState(
  //     state.map((item) => {
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

  let [cart, setCart] = useState([]);
  function cartWin(obj) {
    if (cart.filter((item) => item.id === obj.id).length === 0) {
      setCart([...cart, obj]);
    } else {
      alert("The product is already in the cart");
    }
  }

  return (
    <>
      <div className="container">
        <Cart cart={cart} setCart={setCart} />
        <Nav />
        <Head />
        <Categor />
        <Rec
          // like={like}
          // minus={minus}
          // plus={plus}
          // state={state}
          // stateRec={state.rec}
          // setState={setState}
          cartBtn={cartWin}
        />
        <Best />
        <Top
          // like={like}
          // minus={minus}
          // plus={plus}
          // stateTop={state.top}
          // setState={setState}
          cartBtn={cartWin}
        />
        <Added
          // like={like}
          // minus={minus}
          // plus={plus}
          // stateAdd={state.added}
          // setState={setState}
          cartBtn={cartWin}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
