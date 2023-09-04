export function Rec({ cartBtn, switchBtns, like, stateRec }) {
  return (
    <>
      <section id="Recomendation">
        <div className="c-title">
          <p>For you</p>
          <h1>Top featured products</h1>
        </div>
        <div className="r-cards">
          {stateRec.map((elem) => {
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
