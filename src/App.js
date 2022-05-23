import "./App.css";
import { useState } from "react";
import cross from "./images/cross.png";
import circle from "./images/circle.png";
import white from "./images/white.jpg"

function App() {
  const[image,setImage] = useState(white);
  const[toggleplayer, setToggleplayer] = useState(false);
  const handleClick = () =>{
    if(!toggleplayer){
      setImage(cross);
      setToggleplayer(true);
    } else {
      setImage(circle);
      setToggleplayer(false);
    }
  }

  return (
    <>
    <div className="container1">
      <div className="container2">
        <div className="container3">
          <div className="box" id="box1">
            <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box2">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box3">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box4">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box5">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box6">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box7">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box8">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
          <div className="box" id="box9">
          <img onClick={handleClick} src={image} alt={image} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
