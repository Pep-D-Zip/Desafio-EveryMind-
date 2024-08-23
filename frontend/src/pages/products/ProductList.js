import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {

  const handleEditClick = (product) => {

    onEdit(product);
  };

  const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    }}>
      <div style={{
        width: '80%',
        maxHeight: '400px', 
        overflow: 'auto', 
        border: '1px solid #ddd',
        padding: '8px'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          tableLayout: 'fixed' 
        }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px', width: '10%' }}>ID</th>
              <th style={{ textAlign: 'left', padding: '8px', width: '20%' }}>Nome</th>
              <th style={{ textAlign: 'left', padding: '8px', width: '15%' }}>Código</th>
              <th style={{ textAlign: 'left', padding: '8px', width: '35%' }}>Descrição</th>
              <th style={{ textAlign: 'left', padding: '8px', width: '10%' }}>Preço</th>
              <th style={{ textAlign: 'center', padding: '8px', width: '10%' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ textAlign: 'left', padding: '8px' }}>{product.id}</td>
                <td style={{ textAlign: 'left', padding: '8px' }}>{product.nome}</td>
                <td style={{ textAlign: 'left', padding: '8px' }}>{product.codigo}</td>
                <td style={{ textAlign: 'left', padding: '8px' }}>{product.descricao}</td>
                <td style={{ textAlign: 'left', padding: '8px' }}>
                  R${formatPrice(product.preco)}
                </td>
                <td style={{ textAlign: 'center', padding: '8px' }}>
                  <button onClick={() => handleEditClick(product)} style={{ marginRight: '5px',width: '75px' }}>Editar</button>
                  <button onClick={() => onDelete(product._id)} style={{ marginRight: '5px',width: '75px' }}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
