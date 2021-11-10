import { useState, useEffect } from "react"; // Hooks
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  // Create states
  // const [variable, functions] = useState(initialState);
  const [linea1, setLinea1] = useState(""); // HOOK
  const [linea2, setLinea2] = useState("");
  const [image, setImage] = useState("");

  // HOOKS
  // useEffect(() => {
  //   console.log('Use Effect:', linea1);
  //   // document.title = `You clicked ${linea1} times`;
  // });

  // useEffect(() => {
  //   console.log('Use Effect run when change linea1:', linea1);
  // }, [linea1]);

  // useEffect(() => {
  //   console.log('Use Effect run Only One');
  // }, []);

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

  const onClickExport = () => {
    if (image && (linea1  || linea2)) {
      html2canvas(document.querySelector("#meme")).then((canvas) => {
        // document.body.appendChild(canvas);
  
        // var canvas = document.getElementById("meme");
        const img = canvas.toDataURL("image/png"); // Convierte a imagen
        // document.write('<img src="' + img + '"/>');
  
        const link = document.createElement("a");
        link.download = "meme.png";
        // link.href = document.getElementById("canvas").toDataURL();
        link.href = img;
        link.click();
      });
    } else {
      alert('Seleccione una imagen e ingrese texto en las cajas');
    }
    
  };

  return (
    <div className="App">
      <br />
      <div className="container-properties">
        <select className="select-meme" onChange={onChengeImage}>
          <option value="">Seleccionar Imagen</option>
          <option value="meme1">Meme 1</option>
          <option value="meme2">Meme 2</option>
          <option value="meme3">Meme 3</option>
          <option value="meme4">Meme 4</option>
          <option value="meme5">Meme 5</option>
        </select>
        <input
          className="input-meme"
          onChange={onChengeLinea1}
          type="text"
          placeholder="Enter text linea 1"
        />
        <input
          className="input-meme"
          onChange={onChengeLinea2}
          type="text"
          placeholder="Enter text linea 2"
        />
        <button className="btn-meme" onClick={onClickExport}>
          Export
        </button>
      </div>
      <br />

      <div className="content-meme" id="meme">
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
