import React from 'react';
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            WhaleStore
          </a>
        </div>
        <div>
          <a href="/carrinho">Carrinho</a>
          <a href="/Login">Login</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {data.produtos.map((produto) => (
              <div key={produto._id} className="card">
                <a href={`/produto/${produto._id}`}>
                  <img
                    className="medium"
                    src={produto.image}
                    alt={produto.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/produto/${produto._id}`}>
                    <h2>{produto.name}</h2>
                  </a>
                  <div className="rating">
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                    <span>
                      <i className="fa fa-star"></i>
                    </span>
                  </div>
                  <div className="price">R${produto.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">Todos os direitos reservados.</footer>
    </div>
  );
}

export default App;