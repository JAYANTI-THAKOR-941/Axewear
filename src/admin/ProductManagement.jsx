import React, { useEffect, useState } from 'react'
import api from '../services/api';

const ProductManagement = () => {

 const [products,setProducts] = useState([]);

 const fetchProducts = async()=>{
  try{
    const res = await api.get('/products');
    setProducts(res.data);
  }
  catch(err){
    console.log('Failed to fetch products.!!',err);
  }
 }

 useEffect(()=>{
    fetchProducts();
 },[])

 const handleDelete = async(id)=>{
    window.confirm("Are you sure ? Want to delete this product.!");
    await api.delete(`/products/${id}`);
    window.location.reload();
 }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Final Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((p)=>(
              <tr key={p.id}>
                <td><img src={p.image} alt="" /></td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.finalPrice}</td>
                <td>{p.description}</td>
                <td><button className='btn-primary' onClick={()=>handleDelete(p.id)} >Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductManagement