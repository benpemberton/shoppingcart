import shoppingCart from "./../images/shoppingcart.jpg";

export default function Home() {
  return (
    <div className="home-wrap">
      <div className="home-banner">
        <img src={shoppingCart} />
        <div className="intro-copy">
          <p>
            Welcome to this brand new online shopping experience. All of your
            previous shopping activity is going to be made to look very silly
            and antiquated compared to this glossy, fresh take on things. What
            we have here is your bog standard shopping cart, but in digital
            form! Ever so exciting and truly something to marvel at.
          </p>
        </div>
      </div>
    </div>
  );
}
