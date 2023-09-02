export function Cart({ cart, setCart }) {
  return (
    <>
      <div className="cart">
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
                    <th>
                      <img src={elem?.img} alt="product img" />
                    </th>
                    <th>{elem?.title}</th>
                    <th>{elem?.num}</th>
                    <th>{elem?.price}</th>
                    <th>{elem?.disc}</th>
                    <th>
                      {elem?.num *
                        (elem?.price - (elem?.price / 100) * elem?.disc)}
                    </th>
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
