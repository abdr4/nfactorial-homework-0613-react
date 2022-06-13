import firstImage from "./images/first.jpeg"
import secondImage from "./images/second.jpg"
import thirdImage from "./images/third.jpeg"
import fourthImage from "./images/fourth.jpeg"
import fifthImage from "./images/fifth.jpeg"
import "./App.css"
import logo from "./logo.png";
import {format} from 'date-fns'

const date = format(new Date(), "dd.MM.yyyy HH:mm");
function App() {
  return (
    <>
      <div className="header">
        <div className="input">
          <img src={logo} className="logo"/>
          <input></input>

        </div>
        <div className="date">
          {date}
        </div>
      </div>
      <div className="main">
        <div className="parent">
          <img src={firstImage} className="firstImage"/>
          <h1 className="text">Hey</h1>
        </div>
        <div className="parent">
          <img src={secondImage} className="secondImage"/>
          <h1 className="text">Let's</h1>
        </div>
        <div className="parent">
          <img src={thirdImage} className="thirdImage"/>
          <h1 className="text">Give</h1>
        </div>
        <div className="parent">
          <img src={fourthImage} className="fourthImage"/>
          <h1 className="text">All</h1>
        </div>
        <div className="parent">
          <img src={fifthImage} className="fifthImage"/>
          <h1 className="text">You can</h1>
        </div>
      </div>

    </>
      

  );
}

export default App;
