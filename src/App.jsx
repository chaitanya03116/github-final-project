import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import AboutUs from "./AboutUs.jsx";

function Navbar() {
  const count = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );
  return (
    <nav className="navbar">
      <Link className="logo" to="/">Paradise <span>Nursery</span></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart" aria-label={`Cart with ${count} items`}>🛒 <b>{count}</b></Link>
      </div>
    </nav>
  );
}

function Landing() {
  return (
    <main className="landing">
      <div className="landing-content">
        <p className="kicker">Grow something beautiful</p>
        <h1>Bring the <em>paradise</em> home.</h1>
        <p>Thoughtfully grown houseplants for every room, routine, and level of plant confidence.</p>
        <Link className="primary-button" to="/plants">Get Started <span>→</span></Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}
