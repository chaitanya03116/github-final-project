import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "./CartSlice.jsx";
import { Link } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <main className="page-shell cart-page">
      <div className="page-intro"><p className="kicker">Your collection</p><h1>Shopping cart</h1></div>
      {items.length === 0 ? (
        <div className="empty-cart"><p>Your cart is waiting for something green.</p><Link className="primary-button" to="/plants">Continue Shopping</Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div><h2>{item.name}</h2><p>${item.price.toFixed(2)} each</p>
                  <div className="quantity"><button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button><strong>{item.quantity}</strong><button onClick={() => dispatch(increaseQuantity(item.id))}>+</button></div>
                </div>
                <div className="line-total"><strong>${(item.price * item.quantity).toFixed(2)}</strong><button className="delete" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div>
              </article>
            ))}
          </div>
          <aside className="summary-card"><p>Total</p><h2>${total.toFixed(2)}</h2><button className="primary-button" onClick={() => window.alert("Coming Soon!")}>Checkout</button><Link to="/plants">Continue Shopping</Link></aside>
        </div>
      )}
    </main>
  );
}
