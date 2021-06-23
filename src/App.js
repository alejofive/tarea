import { useState } from 'react';
import './App.css';



function App() {

  const [productos, setProductos] = useState([
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ])

  const [numero, setNumero] = useState(0)
  const [carrito, setCarrito] = useState(0)

  const suma = () => {

  }

  const restar = () => {

  }

  const eliminar = () => {

  }

  const actualizar = () => {

  }

  const actualizarCarta = () => {

  }





  return (
    <div>
      <header className='carrito'>
        <h1 className='fa fa-shopping-cart'> </h1>
        <p>{carrito}</p>
      </header>

      <section>
        <div className='botones'>
          <div className='verde'>
            <button className='fa fa-refresh'></button>
          </div>
          <div className='azul'>
            <button className='fa fa-recycle'></button>
          </div>
        </div>

        {
          productos.map((producto) => {
            return (
              <div className='producto'>
                <div className='caja-zero'>
                  <h1>Zero</h1>
                </div>
                <div className='gris'>
                  <button className='fa fa-plus-circle'></button>
                </div>
                <div className='azul'>
                  <button className='fa fa-minus-circle'></button>
                </div>
                <div className='rojo'>
                  <button className='fa fa-trash-o'></button>
                </div>
              </div>
            )
          })
        }

      </section>
    </div>
  );
}

export default App;
