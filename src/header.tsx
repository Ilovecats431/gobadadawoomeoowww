import { useEffect, useRef } from 'react';
import './header.css';

export default function MainNavigation() {
  return (
    <>
      <div id="main-navigation-b">
        {/* Main Navigation Content */}
        <div id="title-section">
          <img
            id="company-logo"
            src="./src/assets/s-cc.png"
            alt="shopping-cart"
          />
          <h1>SwiftCart</h1>
        </div>
        {/* /// */}
        <div className="w-100">
          <TopRight />
          <BottomRight />
        </div>
        {/* Main Navigation Content */}
      </div>
      <SecondNav />
    </>
  );
}

// <-- MAIN NAV BAR

export function SecondNav() {
  return (
    <div id="second-nav">
      <div className="flex align-center rrrtr b-gap">
        <div className="flex align-center rrrtr">
          <MenuBar menuIcon="./src/assets/black-menu.png" />
          <h2>All</h2>
        </div>

        <Navigators
          arrayNav={['Customer Service', 'Todays deals', 'gadgets', 'gifts']}
        />
      </div>
      <Navigators arrayNav={['Holiday Sales']} />
    </div>
  );
}

export function Navigators({ arrayNav }) {
  return (
    <>
      <div className="flex align-center rrrtr">
        {arrayNav.map((value, index) => (
          <a className="f-black" key={index} href="test">
            {value}
          </a>
        ))}
      </div>
    </>
  );
}

// <-- Second NAV

export function TopRight() {
  return (
    <div id="n-t" className="w-100">
      <Location />
      <div className="flex align-center between stdp">
        <Orders />
        <Language />
        <Donate />
        <PhoneNumber number="808-367-9874" />
      </div>
    </div>
  );
}

export function Location() {
  return (
    <div className="p-relative flex align-center">
      <img
        className="icon"
        src="https://cdn.iconfinder.com/stored_data/1714140/128/png?token=1716797698-MjXAiUZN3NEK%2B6dBTba6Z2hnwbesOYEd3WU7W45I0Zo%3D"
        alt="location"
      />
      <h4>Location: Calif, United State...</h4>
    </div>
  );
}

export function Orders() {
  return <button id="o-b">ORDERS</button>;
}

export function Language() {
  useEffect(() => {}, []);

  return (
    <div id="l-div">
      <img
        src="https://cdn2.iconfinder.com/data/icons/flags/flags/48/united-states-of-america-usa.png"
        alt=""
      />
      <DDMenu options={['EN', 'JPN', 'GER', 'RUS', 'CHI', 'FR']} />
    </div>
  );
}

export function Donate() {
  return <button>donate</button>;
}

export function PhoneNumber({ number }) {
  return (
    <div className="flex align-center">
      <img src="./src/assets/telephone.png" alt="telephone" className="icon" />
      <h5>{number}</h5>
    </div>
  );
}

// <-- TOP RIGHT

export function BottomRight() {
  return (
    <div id="n-b">
      <AdvanceSB />
      <div className="extra-uis">
        <ShoppingCart />
        <WishList />
        <MenuBar />
      </div>
    </div>
  );
}

export function MenuBar({ menuIcon }) {
  return (
    <>
      <button className="menu-icon">
        <img
          src={menuIcon ? menuIcon : './src/assets/g-menu.png'}
          alt="roar"
          className="menu-icon"
        />
      </button>
    </>
  );
}

export function ShoppingCart() {
  return (
    <button>
      <img
        src="./src/assets/s-cc.png"
        alt="white-shopping-cart"
        className="icon"
      />
    </button>
  );
}

export function WishList() {
  return <h5 className="w-l">Wish list</h5>;
}

export function AdvanceSB() {
  return (
    <div className="align-center meowmeow p-relative">
      <div className="rt-bb-t">
        <DDMenu
          options={[
            'Pharmacy',
            'Gadgets',
            'Food',
            'Drinks',
            'Limited',
            'Luxury',
            'Traditional',
            'Top Seller',
          ]}
        />
      </div>
      <input id="search-bar" type="text" placeholder="search here..." />
    </div>
  );
}

// <-- BOTTOM RIGHT

export function DDMenu({ options }) {
  let targetElement = useRef(null);

  useEffect(() => {
    let choicess = targetElement.current.querySelectorAll('.m-summaries');
    let choices = Array.from(choicess);
    const defaultValue = targetElement.current.querySelector('.main-sum');

    console.log(choices);

    const transport = (e) => {
      defaultValue.innerHTML = e.target.innerHTML;
    };

    choices.forEach((e) => {
      e.addEventListener('mousedown', transport);
    });

    return () => {
      choices.forEach((e) => {
        e.removeEventListener('mousedown', transport);
      });
    };
  }, []);

  return (
    <div className="DD-menu">
      <details ref={targetElement} className="m-details">
        <summary className="main-sum">{options[0]}</summary>
        <div className="m-summaries">
          {options.map((option, index) => (
            <summary className="rr-tb" key={index}>
              {option}
            </summary>
          ))}
        </div>
      </details>
    </div>
  );
}
