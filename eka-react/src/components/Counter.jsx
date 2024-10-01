import React,{useState} from 'react';

const Counter = () => {

    //tämä ei käytä React statea
    //let count = 0;

    //oikea state:
    const[count, setCount] = useState(0);


    function increment (){
            //count++;

            //oikea state update - Hook
            setCount(count => count + 1);
    }

    function decrement(){
           //count--;
            setCount(count => count- 1);

    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>++</button>
            <button onClick ={decrement}>--</button>
        </div>

)



}

export default Counter;