import { useState } from 'react';
import './App.css';



function App() {

  const [productos, setProductos] = useState([
    { id: 0, numero: 0 },
    { id: 1, numero: 0 },
    { id: 2, numero: 0 },
    { id: 3, numero: 0 },
  ])


  const [carrito, setCarrito] = useState(0)

  const sumar = (id) => {

    setProductos([
      ...productos.map((producto) => {

        if (id == producto.id) {
          if (producto.numero == 0) {
            setCarrito(carrito + 1)
          }
          return {
            ...producto,
            numero: producto.numero + 1
          }

        } else {
          return producto
        };

      })
    ])

  }

  const restar = (id) => {
    setProductos([
      ...productos.map((producto) => {
        if (id == producto.id) {
          if (producto.numero == 1) {
            setCarrito(carrito - 1)
          }

          if (producto.numero == 0) {
            return {
              ...producto,
              numero: producto.numero = 0,
            }
          }
          return {
            ...producto,
            numero: producto.numero - 1
          }
        } else {
          return producto
        }
      })
    ])
  }

  const eliminar = (id) => {
    setProductos([...productos.filter((producto) => producto.id != id)])
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
                <div className='caja-zero caja-zero2'>
                  <h1>{producto.numero}</h1>
                </div>
                <div className='caja-botones'>
                  <div className='gris'>
                    <button
                      className='fa fa-plus-circle'
                      onClick={() => sumar(producto.id)}
                    ></button>
                  </div>
                  <div className='azul'>
                    <button
                      className='fa fa-minus-circle'
                      onClick={() => restar(producto.id)}
                    ></button>
                  </div>
                  <div className='rojo'>
                    <button className='fa fa-trash-o'
                      onClick={() => eliminar(producto.id)}
                    ></button>
                  </div>
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
