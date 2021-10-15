import { useState } from "react"; // Hooks
import "./App.css";

function App() {
  // Create states
  // const [variable, functions] = useState(initialState);
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [image, setImage] = useState("");

  const onChengeLinea1 = (event) => {
    // refresh variable linea1
    setLinea1(event.target.value);
  };

  const onChengeLinea2 = (event) => {
    setLinea2(event.target.value);
  };

  const onChengeImage = (event) => {
    // --debugger
    setImage(event.target.value);
  };

  return (
    <div className="App">
      <br />
      <select onChange={onChengeImage}>
        <option value="">Seleccionar Imagen</option>
        <option value="meme1">Meme 1</option>
        <option value="meme2">Meme 2</option>
        <option value="meme3">Meme 3</option>
        <option value="meme4">Meme 4</option>
        <option value="meme5">Meme 5</option>
      </select>
      <br />
      <br />

      <input onChange={onChengeLinea1} type="text" placeholder="Linea 1" />
      <br />

      <input onChange={onChengeLinea2} type="text" placeholder="Linea 2" />
      <br />
      <br />

      <button> Export</button>
      <br />
      <br />

      <div className="content-meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={`assets/images/${image}.jpg`} alt="" />
      </div>
    </div>
  );
}

export default App;

/*
 NAVBAR

 <div className="container">
        <div className="nav-logo">
          <a href="#">REACT APP MEMES</a>
        </div>
        <div className="menu">
          <a href="#" className="nav-menu">
            Home
          </a>
          <a href="#" className="nav-menu">
            About us
          </a>
          <a href="#" className="nav-menu">
            Services
          </a>
          <a href="#" className="nav-menu">
            Contact
          </a>
        </div>
      </div>



 */
