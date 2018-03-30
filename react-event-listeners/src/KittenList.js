import React from "react";
import kittensData from "./kittens.json";
import Kitten from "./Kitten";

function KittenList() {

    function speak(kitten) {
        alert(`Hi I'm ${kitten.name} and I'm ${kitten.age} years old`);
    }

    const kittens = kittensData
        .map(kittenObj => 
            <Kitten 
                key={kittenObj.img} 
                kitten={kittenObj}
                handleClick={speak}
            />
        )
    return (
        <div>
            {kittens}
        </div>
    )
}

export default KittenList;
