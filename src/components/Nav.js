import logo from "../img/logo/logo.png";

export function Nav({ cart, activeBtn, inLiked, likeActive }) {
  return (
    <>
      <nav>
        <div className="topNav">
          <div className="contact">
            <div className="mail">
              <i className="fa-regular fa-envelope"></i>
              <a href="a">Hello@colorib.com</a>
            </div>
            <span className="line"></span>
            <div className="networks">
              <p>Free Shipping for all order of $99</p>
              <div className="soc-net">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="middleNav">
          <div className="middle">
            <div className="leftMid">
              <div className="logo-name">
                <img src={logo} alt="" />
              </div>
              <div className="select">
                <i className="fa-solid fa-location-dot"></i>
                <select>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Gurugram">Gurugram</option>
                </select>
              </div>
              <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholde="Search for products..." /> 
              </div>
            </div>
            <div className="rightMid">
              <div className="tel">
                <i className="fa-solid fa-phone"></i>
                <a href="tel: 1800000000">1800-000-000</a>
              </div>
              <span className="line"></span>
              <div className="liked" onClick={likeActive}>
                <i className="fa-regular fa-heart"></i>
                {inLiked > 0 ? <span>{inLiked}</span> : ""}
              </div>
              <span className="line"></span>
              <div className="user">
                <i className="fa-regular fa-user"></i>
                <div className="userName">
                  <h4>John Doe</h4>
                </div>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomNav">
          <div className="navigators">
            <div className="leftBot">
              <div className="categories">
                <i className="fa-solid fa-bars"></i>
                <p>Select Categories</p>
              </div>
              <div className="links">
                <ul>
                  <li>
                    <a href="a">Home</a>
                  </li>
                  <li>
                    <a href="a">Product</a>
                  </li>
                  <li>
                    <a href="a">Stores</a>
                  </li>
                  <li>
                    <a href="a">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightBot">
              <button className="inCart" onClick={activeBtn}>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Cart {cart.length > 0 ? cart.length : ""}</p>
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
