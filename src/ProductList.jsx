import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice.jsx";
import { categories } from "./plantData.js";

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const added = new Set(items.map((item) => item.id));
  return (
    <main className="page-shell">
      <div className="page-intro">
        <p className="kicker">The plant shop</p>
        <h1>Find your new favorite leaf.</h1>
        <p>Six lovely choices in every collection, ready to brighten your space.</p>
      </div>
      {categories.map((category) => (
        <section className="category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} loading="lazy" />
                <div className="plant-info">
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button disabled={added.has(plant.id)} onClick={() => dispatch(addToCart(plant))}>
                    {added.has(plant.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
