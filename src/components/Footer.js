import footerLogo from "../img/logo/footer_logo.png";
import appstore from "../img/footer/appstore.png";
import gplay from "../img/footer/gplay.png";
import payment from "../img/footer/payment icon.png";

export function Footer() {
  return (
    <>
      <footer>
        <div className="topFooter">
          <div className="leftFooter">
            <div className="leftSide">
              <div className="logo">
                <img src={footerLogo} alt="" />
              </div>
              <div className="address">
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="middleSide">
              <div className="links">
                <div className="link-title">
                  <h1>Useful Link</h1>
                </div>
                <ul>
                  <li>
                    <a href="a">About us</a>
                  </li>
                  <li>
                    <a href="a">About our shop</a>
                  </li>
                  <li>
                    <a href="a">Delivery information</a>
                  </li>
                  <li>
                    <a href="a">Privacy policy</a>
                  </li>
                  <li>
                    <a href="a">Our sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightSide">
              <div className="links">
                <ul>
                  <li>
                    <a href="a">Home</a>
                  </li>
                  <li>
                    <a href="a">Product</a>
                  </li>
                  <li>
                    <a href="a">Contact</a>
                  </li>
                  <li>
                    <a href="a">Stores</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rightFooter">
            <div className="download">
              <div className="dwl-title">
                <p>Download App</p>
              </div>
              <div className="stores">
                <img src={appstore} alt="appstore" />
                <img src={gplay} alt="gplay" />
              </div>
            </div>
            <div className="sign-up">
              <div className="sign-title">
                <p>Sign up for our newsletter</p>
                <form>
                  <input type="email" placeholder="Enter Email Address" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
            <div className="payment">
              <div className="pay-title">
                <p>Payment method</p>
              </div>
              <div className="methods">
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter">
          <div className="subtitle">
            <p>
              Copyright ©2021 All rights reserved | This template is made with
              💚 by <span>omaxmudovv</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
