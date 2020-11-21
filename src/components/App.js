
import React, { useState } from 'react';
import  '../styles/App.css';

function App() {
  const [gato, setGato] = useState(<img className="gato" src='https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg'/>)
  return (
    <div className="App">
      <header className="App-header">
    <h1>Probando Hooks </h1>
    <p>Te presento a tu nueva mascota: </p>
  <div> {gato}</div>
    <button onClick={() => setGato(<img className="gato" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQaFIFlEJ4tza_cm63VlNcuGUK-gztIXpbgA&usqp=CAU'/>)}>
        ¡Cambia el gatito!
      </button>
      </header>
    </div>
  );
}

export default App;
