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

  const[toggleplayer, setToggleplayer] = useState(true);

    const handleClick1 = () =>{
      if(toggleplayer){
        setImage1(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage1(circle);
        setToggleplayer(true);
      }
    }
    const handleClick2 = () =>{
      if(toggleplayer){
        setImage2(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage2(circle);
        setToggleplayer(true);
      }
    }
    const handleClick3 = () =>{
      if(toggleplayer){
        setImage3(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage3(circle);
        setToggleplayer(true);
      }
    }
    const handleClick4 = () =>{
      if(toggleplayer){
        setImage4(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage4(circle);
        setToggleplayer(true);
      }
    }
    const handleClick5 = () =>{
      if(toggleplayer){
        setImage5(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage5(circle);
        setToggleplayer(true);
      }
    }
    const handleClick6 = () =>{
      if(toggleplayer){
        setImage6(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage6(circle);
        setToggleplayer(true);
      }
    }
    const handleClick7 = () =>{
      if(toggleplayer){
        setImage7(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage7(circle);
        setToggleplayer(true);
      }
    }
    const handleClick8 = () =>{
      if(toggleplayer){
        setImage8(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage8(circle);
        setToggleplayer(true);
      }
    }
    const handleClick9 = () =>{
      if(toggleplayer){
        setImage9(cross);
        setToggleplayer(false);
      } else if(!toggleplayer){
        setImage9(circle);
        setToggleplayer(true);
      }
    }

    if(image1 === cross  && image2 === cross && image3 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image1 === circle  && image2 === circle && image3 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image4 === cross  && image5 === cross && image6 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image4 === circle  && image5 === circle && image6 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image7 === cross  && image8 === cross && image9 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image7 === circle  && image8 === circle && image9 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image1 === cross  && image4 === cross && image7 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image1 === circle  && image4 === circle && image7 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image2 === cross  && image5 === cross && image8 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image2 === circle  && image5 === circle && image8 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image3 === cross  && image6 === cross && image9 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image3 === circle  && image6 === circle && image9 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image1 === cross  && image5 === cross && image9 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image1 === circle && image5 === circle && image9 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image3 === cross  && image5 === cross && image7 === cross){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
    } else if(image3 === circle  && image5 === circle && image7 === circle){
      setTimeout(function(){ alert("YOU WIN !!!"); }, 100);
      setTimeout(function(){ window.location.reload(); }, 200);
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
