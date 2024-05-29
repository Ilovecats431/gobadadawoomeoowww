import './body.css';
import './header.css';

export default function Body() {
  return (
    <section id="main-body">
      <AdSection />
    </section>
  );
}

export function AdSection() {
  return (
    <div className="ad-section">
      <BigAd bgImage="./src/assets/teddy-bear.png" />
      <div className="s-sec-ad f-grow">
        <HorizontalAd />
      </div>
    </div>
  );
}

export function BigAd({ bgImage }) {
  return (
    <div
      className="b-ad-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ShopButton scale="2" color="pink" />
    </div>
  );
}

export function HorizontalAd({ bgImage }) {
  return (
    <div className="h-ad-wrapper" style={{ backgroundImage: bgImage }}>
      <MoreButton />
    </div>
  );
}

//<-- Ad Section!!!

// Button Section
export function ShopButton({ color, scale }) {
  return (
    <button
      className="s-btn"
      style={{ backgroundColor: `${color}`, scale: scale }}
    >
      Shop Now
    </button>
  );
}

export function MoreButton() {
  return <button className="m-btn">More</button>;
}

export function CartButton() {
  return <button className="atc-btn">Add to cart</button>;
}
2;

// Button Section
