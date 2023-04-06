import ImageSlider from "./DonutComponents/ImageSlider";
import DonutFlavors from "./DonutComponents/DonutFlavors";
import DonutTypes from "./DonutComponents/DonutTypes";
import donutLogo from "../../raw/donutLogo.png";

import donutJar1 from "../../raw/DonutStuff/donutjar1.jpeg";
import donutJar2 from "../../raw/DonutStuff/donutjar2.jpeg";

import dTagline from "../../raw/DonutStuff/dTagline.png";

import donutmiddle from "../../raw/DonutStuff/donutmiddle.png";
import DonutCart from "./DonutComponents/DonutCart";

import { ActDInvenContext } from "./DonutComponents/ActDInvenContext";
import { useEffect, useState } from "react";

function Donut(props) {
  const [navOut, setNavOut] = useState(false);

  const [activeDonutInventory, setActiveDonutInventory] = useState([]);

  function closeNav() {
    setNavOut((prev) => !prev);
  }

  const [stillOver, setStillOver] = useState(false);

  useEffect(() => {
    const donutMiddle = document.getElementsByClassName("donutMiddle")[0];

    if (stillOver) {
      donutMiddle.style.rotate = "360deg";
    } else {
      donutMiddle.style.rotate = "0deg";
    }

    const interval = setInterval(() => {
      if (stillOver) {
        donutMiddle.src =
          "https://www.pngall.com/wp-content/uploads/11/Pink-Donut-PNG-Images-HD.png";
      }
    }, 6000);

    const interval2 = setInterval(() => {
      if (!stillOver) {
        donutMiddle.src = donutmiddle;
      }
    }, 6000);

    setTimeout(() => {
      clearInterval(interval2);
      clearInterval(interval);
    }, 7000);

    return () => {
      clearInterval(interval2);
      return clearInterval(interval);
    };
  }, [stillOver]);

  //make a button that only shows if the screen size is under 800px - starts off invis then vis
  // make og nav bar that shows only two things, then shows everything
  return (
    <div className="DonutMDiv">
      <img
        onClick={() => {
          window.location.reload(false);
        }}
        className="donutLogo"
        src={donutLogo}
      />

      <ActDInvenContext.Provider
        value={[activeDonutInventory, setActiveDonutInventory]}
      >
        <nav className="donutFirstNav">
          <svg
            onClick={closeNav}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
          </svg>
          <ul>
            <div>
              Menu
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div className="dropdownContainer">
              <li>Baked Carrot Cake Donut</li>
              <li>Baked Cinnamon Sugar Donut</li>
              <li>Strawberry Jelly Donut</li>
              <li>Chocolate Cake Donut</li>
            </div>
          </ul>
          <ul>
            <div>
              About
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            <div className="dropdownContainer">
              <li>How we started</li>
              <li>What our customrs think</li>
              <li>What we strive for</li>
            </div>
          </ul>
          <ul>
            <div>
              Locations
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div className="dropdownContainer">
              <li>St.Andrew</li>
              <li>Portmore</li>
              <li>Clarendon</li>
            </div>
          </ul>
          <ul>
            <div>
              Shop
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div className="dropdownContainer">
              <li>Shop Detials</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>Wishlist</li>
            </div>
          </ul>
          <ul>
            <div>
              Blog
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div className="dropdownContainer">
              <li>Blog List</li>
              <li>Blog Details</li>
            </div>
          </ul>

          <DonutCart />
        </nav>

        <nav style={{ translate: navOut ? "0" : "-100%" }} className="donutNav">
          <a href="/donut">
            <img src={donutLogo} />
          </a>
          <svg
            onClick={closeNav}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
          </svg>
          <ul>
            <div>
              Menu
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            <li>Baked Carrot Cake Donut</li>
            <li>Baked Cinnamon Sugar Donut</li>
            <li>Strawberry Jelly Donut</li>
            <li>Chocolate Cake Donut</li>
          </ul>

          <ul>
            <div>
              About
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            <li>How we started</li>
            <li>What our customrs think</li>
            <li>What we strive for</li>
          </ul>

          <ul>
            <div>
              Locations
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            <li>St.Andrew</li>
            <li>Portmore</li>
            <li>Clarendon</li>
          </ul>

          <ul>
            <div>
              Shop
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            <li>Shop Detials</li>
            <li>Cart</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </ul>

          <ul>
            <div>
              Blog
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>

            <li>Blog List</li>
            <li>Blog Details</li>
          </ul>
        </nav>

        <br />
        <br />

        <div className="donutFrontDivContainer">
          <div className="hidden donutFrontDiv">
            <p>Delicious Donuts</p>

            <p className="hidden">Freshly baked and made</p>
            <div>
              <img src={dTagline} />
              <img
                onMouseEnter={() => setStillOver(true)}
                onMouseLeave={() => setStillOver(false)}
                className="donutMiddle"
                src={donutmiddle}
              />
            </div>
          </div>
        </div>

        <section className="donutFlavors">
          <DonutFlavors />
        </section>
      </ActDInvenContext.Provider>

      <section className="donutIntro">
        <p>Welcome to Delicious Donuts!</p>
        <ImageSlider />

        <p>
          We are a small, locally owned bakery specializing in handmade, fresh
          donuts.
        </p>
        <p>
          Our goal is to provide our customers with a wide range of delicious
          flavors and types of donuts to choose from, made with high-quality
          ingredients and a touch of love.
        </p>
        <p>
          Whether you're in the mood for a classic glazed donut, a chocolate
          frosted treat, or something more unique like maple bacon or pumpkin
          spice, we have something for everyone.
        </p>
        <p>
          We also offer a variety of donut types, including cake donuts, raised
          donuts, and filled donuts, each with their own special flavors and
          fillings.
        </p>
        <p>
          Thank you for choosing Delicious Donuts for your next sweet
          indulgence. We hope to see you soon!
        </p>
      </section>

      <section className="donutTypes">
        <DonutTypes />
      </section>

      <section className="donutOccasions">
        <h1 className="dfTitle">Special Occasions</h1>
        <p>Need donuts for a special occasion or event?</p>
        <p>
          Delicious Donuts can cater your needs with custom orders of any size.
        </p>
        <p>
          Choose from our wide range of flavors and types of donuts, or let us
          know if you have any special requests.
        </p>

        <p>
          Minimum order quantities apply for custom orders, and delivery is
          available for an additional fee. Contact us to place your order and
          make your special occasion even sweeter.
        </p>
        <div className="donutJarContainer">
          <div className="donutJar">
            <h1>Birthdays</h1>
            <button>See more</button>
            <img src={donutJar1} />
          </div>

          <div className="donutJar">
            <h1>Venues</h1>
            <button>See more</button>
            <img src={donutJar2} />
          </div>
        </div>
      </section>

      <footer>
        <p>
          Thank you for choosing Delicious Donuts for your sweet indulgences.
        </p>
        <p>
          To place an order or for more information, please don't hesitate to
          contact us:
        </p>
        <ul>
          <li>Phone: 555-555-1212</li>
          <li>Email: info@deliciousdonuts.com</li>
        </ul>
        <p>
          Follow us on social media to stay up to date on our latest flavors and
          specials
        </p>
        <p>Facebook: @deliciousdonuts</p>
        <p>Instagram: @delicious_donuts</p>
        <p>
          We are located at 123 Main Street, Anytown Jamaica. Stop by and see us
          in person or give us a call to place your order.
        </p>
        <p>We can't wait to serve you!</p>
      </footer>
    </div>
  );
}

export default Donut;
