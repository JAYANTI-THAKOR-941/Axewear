import React, { useEffect, useState } from "react";
import api from "../services/api";
import "./main.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
      setError("");
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products!");
      setLoading(false);
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <h2 className="error">{error}</h2>;
  if (loading) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="products-page">
      
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Discover Latest Fashion</h1>
        <p>Trendy collections for Men, Women & Kids</p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-container">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            
            <div className="img-box">
              <img src={p.image} alt={p.name} />
              {p.discount > 0 && (
                <span className="badge">-{p.discount}%</span>
              )}
            </div>

            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="brand">{p.brand}</p>

              <div className="price">
                <span className="final">₹{p.finalPrice}</span>
                <span className="old">₹{p.price}</span>
              </div>

              <p className="rating">⭐ {p.rating} ({p.reviews})</p>

              <button className="btn" onClick={()=>navigate(`/product/${p.id}`)}>View Details</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;