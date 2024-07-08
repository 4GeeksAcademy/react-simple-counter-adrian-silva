import React from "react";
import Digit from "./digit";

let Contador = ({number}) => {
    const first = Math.floor(number/1)%10;
    const second = Math.floor(number/10)%10;
    const third = Math.floor(number/100)%10;
    const fourth = Math.floor(number/1000)%10;
    const fifth = Math.floor(number/10000)%10;
    const sixth = Math.floor(number/100000)%10;

    function reset() {
        number = 0;
        //counterValue.innerHTML = counter;
    }

    return (
        <div className="container">
            <div className="card bg-dark">
                <div className="card-body d-flex justify-content-center">
                    <Digit digit="🕟"/>
                    <Digit digit={sixth} />
                    <Digit digit={fifth} />
                    <Digit digit={fourth} />
                    <Digit digit={third} />
                    <Digit digit={second} />
                    <Digit digit={first} />
                </div>
            </div> 
        </div>
    )
}

export default Contador;