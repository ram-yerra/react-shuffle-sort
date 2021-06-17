import React, { useState } from "react";
import "./App.scss";

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const shuffle = () => {
        let i = numbers.length;
        let nums = [...numbers];
        let j;
        while(--i > 0){
            j= Math.floor(Math.random() * (i+1));
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        setNumbers(nums);
    };
    const sort = () => {
        setNumbers([...numbers.sort()]);
    };
    return (
        <>
            <h3> Shuffle & Sort</h3>
            <div className="shuffle-sort-container">
                <div  className="numbers-container">
                    {numbers.map((number, index) => (
                        <div key={index} className={'card card-'+index}>{number}</div>
                    ))}
                </div>
                <div className="buttons-container">
                    <button className="shuffle" onClick={shuffle}>Shuffle</button>
                    <button className="sort" onClick={sort}>Sort</button>
                </div>
            </div>            
            <p>Shuffle & Sort by Ram Kapil Yerra</p>
        </>
    )
}

export default App