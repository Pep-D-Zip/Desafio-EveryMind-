import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, editProduct }) => {
  const [product, setProduct] = useState({
    id: '',
    nome: '',
    codigo: '',
    descricao: '',
    preco: ''
  });

  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct);
    } else {
      setProduct({ id: '', nome: '', codigo: '', descricao: '', preco: '' });
    }
  }, [editProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  const handleClear = () => {
    setProduct({ id: '', nome: '', codigo: '', descricao: '', preco: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type="text"
        name="nome"
        value={product.nome}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        name="codigo"
        value={product.codigo}
        onChange={handleChange}
        placeholder="Código"
        required
      />
      <input
        type="text"
        name="descricao"
        value={product.descricao}
        onChange={handleChange}
        placeholder="Descrição"
      />
      <input
        type="number"
        name="preco"
        value={product.preco}
        onChange={handleChange}
        placeholder="Preço"
        required
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button type="submit">{editProduct ? 'Atualizar' : 'Adicionar'} Produto</button>
        <button type="button" onClick={handleClear}>Limpar</button>
      </div>
    </form>
  );
};

export default ProductForm;
