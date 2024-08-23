import React, { useState, useEffect } from 'react';
import ProductForm from './pages/products/ProductForm';
import ProductList from './pages/products/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddOrUpdateProduct = (product) => {
    if (editProduct) {
      fetch(`/api/products/${editProduct._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(response => response.json())
        .then(updatedProduct => {
          setProducts(products.map(p => p._id === updatedProduct._id ? updatedProduct : p));
          setEditProduct(null);
        })
        .catch(error => console.error('Error updating product:', error));
    } else {
      fetch(`/api/products/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(response => response.json())
        .then(newProduct => setProducts([...products, newProduct]))
        .catch(error => console.error('Error adding product:', error));
    }
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleDeleteProduct = (productId) => {
    fetch(`/api/products/${productId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProducts(products.filter(p => p._id !== productId));
      });
  };

  return (
    <div>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 id="nunes-sports">Nunes Sports</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <ProductForm
          onSubmit={handleAddOrUpdateProduct}
          editProduct={editProduct}
        />
      </div>

      <div style={{ padding: '0 20px' }}>
        <ProductList
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default App;
