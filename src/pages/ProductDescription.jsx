import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./main.css";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log("Failed to fetch product details!", err);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!product) return <h2 className="loading">Loading Product...</h2>;

  return (
    <div className="product-detail">
      
      {/* LEFT: IMAGE */}
      <div className="left">
        <img src={product.image} alt={product.name} className="main-img" />

        <div className="thumbs">
          {product.images?.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>

      {/* RIGHT: DETAILS */}
      <div className="right">
        <h1>{product.name}</h1>
        <p className="brand">{product.brand}</p>

        <p className="rating">
          ⭐ {product.rating} ({product.reviews} reviews)
        </p>

        <div className="price">
          <span className="final">₹{product.finalPrice}</span>
          <span className="old">₹{product.price}</span>
          <span className="discount">{product.discount}% OFF</span>
        </div>

        <p className="desc">{product.description}</p>

        {/* SIZES */}
        <div className="sizes">
          <h4>Sizes:</h4>
          {product.sizes?.map((s, i) => (
            <span key={i} className="size">{s}</span>
          ))}
        </div>

        {/* COLORS */}
        <div className="colors">
          <h4>Colors:</h4>
          {product.colors?.map((c, i) => (
            <span key={i} className="color">{c}</span>
          ))}
        </div>

        {/* STOCK */}
        <p className="stock">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* BUTTON */}
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDescription;