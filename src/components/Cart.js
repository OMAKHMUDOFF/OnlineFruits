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
        <button
          onClick={closeCart}
          className={activeWin ? "closeBtn active" : "closeBtn"}
        >
          X
        </button>
        <table border={1}>
          <thead>
            <tr>
              <th>№</th>
              <th>Product photo</th>
              <th>Name</th>
              <th>Piece</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Total price</th>
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
                    <td>{elem?.price}</td>
                    <td>{elem?.disc}</td>
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
                <th colSpan={100}>Empty...</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
