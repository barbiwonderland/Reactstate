import React from 'react';
import ReactDOM from 'react-dom';

class GatoClase extends React.Component {
  state = { gato: <img className="gato" src='https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'/> } // inicializamos el state a 0

  render () {
    const { gato } = this.state // extraemos el count del state

    return (
      <div >
 <h1 className="centrar">Probando estado en clases</h1>
 <p>Te presento a tu nueva mascota:</p>
 {gato}
        { /* Actualizamos el state usando el método setState */ }
        <button onClick={() => this.setState({ gato: <img className="gato" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaFIFlEJ4tza_cm63VlNcuGUK-gztIXpbgA&usqp=CAU'/> })}>
          ¡Cambiar el Gatito!
        </button>
      </div>
    )
  }
}
export default GatoClase;
