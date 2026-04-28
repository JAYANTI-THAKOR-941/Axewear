import React, { useEffect, useState } from 'react'
import api from '../services/api';

const Products = () => {

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");

  const fetchProducts = async()=>{
    try{
      const res = await api.get('/products');
      setProducts(res.data);
      setLoading(false);
      setError("");
    }
    catch(err){
      setError("Failed to fetch products.");
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  if(error) return <h2>{error}</h2>;
  if(loading) return <h2>Loading...</h2>
  return (
    <div>
      {
        products.length === 0 ? <h2>Product Not Found.!</h2>:
        products.map((p)=>(
          <div className="product-card" key={p.id}>
            <h3>{p.name}</h3>
            <img src={p.image} alt="" />
            <button>View Details</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products