import "./App.css";
import { useState } from "react";
import cross from "./images/cross.png";
import circle from "./images/circle.png";
import white from "./images/white.jpg";

function App() {
  const[image1,setImage1] = useState(white);
  const[image2,setImage2] = useState(white);
  const[image3,setImage3] = useState(white);
  const[image4,setImage4] = useState(white);
  const[image5,setImage5] = useState(white);
  const[image6,setImage6] = useState(white);
  const[image7,setImage7] = useState(white);
  const[image8,setImage8] = useState(white);
  const[image9,setImage9] = useState(white);

  const[toggleplayer, setToggleplayer] = useState(false);

    const handleClick1 = () =>{
      if(!toggleplayer){
        setImage1(cross);
        setToggleplayer(true);
      } else {
        setImage1(circle);
        setToggleplayer(false);
      }
    }
    const handleClick2 = () =>{
      if(!toggleplayer){
        setImage2(cross);
        setToggleplayer(true);
      } else {
        setImage2(circle);
        setToggleplayer(false);
      }
    }
    const handleClick3 = () =>{
      if(!toggleplayer){
        setImage3(cross);
        setToggleplayer(true);
      } else {
        setImage3(circle);
        setToggleplayer(false);
      }
    }
    const handleClick4 = () =>{
      if(!toggleplayer){
        setImage4(cross);
        setToggleplayer(true);
      } else {
        setImage4(circle);
        setToggleplayer(false);
      }
    }
    const handleClick5 = () =>{
      if(!toggleplayer){
        setImage5(cross);
        setToggleplayer(true);
      } else {
        setImage5(circle);
        setToggleplayer(false);
      }
    }
    const handleClick6 = () =>{
      if(!toggleplayer){
        setImage6(cross);
        setToggleplayer(true);
      } else {
        setImage6(circle);
        setToggleplayer(false);
      }
    }
    const handleClick7 = () =>{
      if(!toggleplayer){
        setImage7(cross);
        setToggleplayer(true);
      } else {
        setImage7(circle);
        setToggleplayer(false);
      }
    }
    const handleClick8 = () =>{
      if(!toggleplayer){
        setImage8(cross);
        setToggleplayer(true);
      } else {
        setImage8(circle);
        setToggleplayer(false);
      }
    }
    const handleClick9 = () =>{
      if(!toggleplayer){
        setImage9(cross);
        setToggleplayer(true);
      } else {
        setImage9(circle);
        setToggleplayer(false);
      }
    }


    if(image1  && image2 && image3 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image1  && image2 && image3 === circle){
      window.alert("YOU WIN !!!!");
    } else if(image4  && image5 && image6 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image4  && image5 && image6 === circle){
      window.alert("YOU WIN !!!!");
    } else if(image7  && image8 && image9 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image7  && image8 && image9 === circle){
      window.alert("YOU WIN !!!!");
    } else if(image1  && image4 && image7 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image1  && image4 && image7 === circle){
      window.alert("YOU WIN !!!!");
    } else if(image2  && image5 && image8 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image2  && image5 && image8 === circle){
      window.alert("YOU WIN !!!!");
    } else if(image3  && image6 && image9 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image3  && image6 && image9 === circle){
      window.alert("YOU WIN !!!!");
    } else if(image1  && image5 && image9 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image1  && image5 && image9 === circle){
      window.alert("YOU WIN !!!!");
    } else if(image3  && image5 && image7 === cross){
      window.alert("YOU WIN !!!!");
    } else if(image3  && image5 && image7 === circle){
      window.alert("YOU WIN !!!!");
    }
  

  return (
    <>
    <div className="container1">
      <div className="container2">
        <div className="container3">
          <div className="box" id="box1">
            <img onClick={handleClick1} src={image1} alt={image1} />
          </div>
          <div className="box" id="box2">
          <img onClick={handleClick2} src={image2} alt={image2} />
          </div>
          <div className="box" id="box3">
          <img onClick={handleClick3} src={image3} alt={image3} />
          </div>
          <div className="box" id="box4">
          <img onClick={handleClick4} src={image4} alt={image4} />
          </div>
          <div className="box" id="box5">
          <img onClick={handleClick5} src={image5} alt={image5} />
          </div>
          <div className="box" id="box6">
          <img onClick={handleClick6} src={image6} alt={image6} />
          </div>
          <div className="box" id="box7">
          <img onClick={handleClick7} src={image7} alt={image7} />
          </div>
          <div className="box" id="box8">
          <img onClick={handleClick8} src={image8} alt={image8} />
          </div>
          <div className="box" id="box9">
          <img onClick={handleClick9} src={image9} alt={image9} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
