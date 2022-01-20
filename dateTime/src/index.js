import React from "react";
import ReactDOM from "react-dom";
import './index.css'

let car = "";
let time = new Date();
let time2 = time.toLocaleDateString();
let time3 = time.toLocaleTimeString();
time = time.getHours();
// let date = time.getDate();

let greeting = "";
let cssStyle = {}

if (time >= 1 && time < 12) {
  greeting = "Good Morning";
  cssStyle.color = "Green"
  car = "https://wallpaperaccess.com/full/88350.jpg"
} else if (time >= 12 && time < 16) {
  greeting = "Good Afternoon";
  cssStyle.color = "Yellow"
  car = "https://www.whatspaper.com/wp-content/uploads/2021/05/whatspaper-150.jpg"
} else if (time >= 16 && time < 20) {
  greeting = "Good Evening";
  cssStyle.color = "Orange"
  car = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Zun3mMz3YLfsd5FSwJhsoyHkpX9ThsdMcg&usqp=CAU"
} else {
  greeting = "Good Night";
  cssStyle.color = "White"
  car = "https://rukminim1.flixcart.com/image/416/416/jltrl3k0/poster/z/c/n/large-nature-in-night-wallpaper-ieie003-original-imaeg64fppg8frch.jpeg?q=70"
}

ReactDOM.render(
  <>

    <div>
      <h1 style={{ backgroundImage: `url(${car})` }}>Hello Shubham, <span style={cssStyle}>{greeting}</span><br /> <span>Today's Date</span> -<span style={cssStyle}>{time2}</span><br/> <span>Today's Time</span> -<span style={cssStyle}>{time3}</span></h1>

      <br />
      {/* <p>{time}</p> */}
    </div>
  </>,
  document.getElementById("root")

);