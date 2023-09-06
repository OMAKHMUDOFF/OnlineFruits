export function Cart({ cart, activeWin, closeCart, setCart }) {
  function del(item) {
    setCart(
      cart.filter((e) => {
        return e.id !== item.id;
      })
    );
  }

  return (
    <>
      <div className={activeWin ? "cart active" : "cart"}>
        {/* <table border={1}>
          <thead>
          <tr>
              <th>№</th>
              <th>Product photo</th>
              <th>Name</th>
              <th>Piece</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Total price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((elem, i) => {
                return (
                  <tr key={elem.id}>
                    <th>{i + 1}</th>
                    <td className="imgTab">
                      <img src={elem?.img} alt="product img" />
                    </td>
                    <td>{elem?.title}</td>
                    <td>{elem?.num}</td>
                    <td>{elem?.price}$</td>
                    <td>{elem?.disc}%</td>
                    <td>
                      {elem?.num *
                        parseInt(
                          elem?.price - (elem?.price / 100) * elem?.disc
                        )}
                    </td>
                    <td>
                      <button className="delBtn" onClick={() => del(elem)}>
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={100}>Your Cart is Empty!</th>
              </tr>
            )}
          </tbody>
        </table> */}
        <div className="cartProducts">
          <button
            onClick={closeCart}
            className={activeWin ? "closeBtn active" : "closeBtn"}
          >
            Close Cart
          </button>
          <div className="title">
            <h1>My Cart</h1>
          </div>

          <div className="cartCards">
            {cart.length > 0 ? (
              cart.map((el, i) => {
                return (
                  <div className="cartCard" key={el.id}>
                    <div className="prodImg">
                      <img src={el.img} alt="" />
                    </div>
                    <div className="rightAbout">
                      <div className="prodName">
                        <h3>{el.title}</h3>
                      </div>
                      <div className="price">
                        <p>
                          <del>{el.price.toFixed(2)}$</del>
                          {(el.price - (el.disc / 100) * el.price).toFixed(2)}$
                        </p>
                      </div>
                      <div className="u-save">
                        <p>
                          You save <span>{(el.disc / 100) * el.price}</span>$
                        </p>
                      </div>
                      <div className="hMuch">
                        <p>{el.num} Piece</p>-
                        <h4>
                          {el.num * (el.price - (el.disc / 100) * el.price)}$
                        </h4>
                      </div>
                    </div>
                    <div className="cartBtns">
                      <button onClick={() => del(el)}>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1> Your cart is empty...</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
