import { useState } from "react";
import "../App.css";


// This component work is to change the backgroundColor when someone click on the btns
export default function BackGroundChanger() {

    let [color, setColor] = useState("olive");

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh', width: '100vw', backgroundColor: color }}>
                <h2>{color}</h2>
            </div>

            <div className="container bg-secondary mt-4 py-3 d-flex justify-content-around">
                <button onClick={() => {setColor("blue")}} type="button" className="btn btn-primary btn-same-size">Blue</button>
                <button onClick={() => {setColor("green")}} type="button" className="btn btn-success btn-same-size">Green</button>
                <button onClick={() => {setColor("red")}} type="button" className="btn btn-danger btn-same-size">Red</button>
                <button onClick={() => {setColor("yellow")}} type="button" className="btn btn-warning btn-same-size">Yellow</button>
                <button onClick={() => {setColor("white")}} type="button" className="btn btn-light btn-same-size">Light</button>
                <button onClick={() => {setColor("black")}} type="button" className="btn btn-dark btn-same-size">Dark</button>
            </div>
        </>

    );
}