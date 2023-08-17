import { useContext, useEffect,useState } from "react"
/* eslint-disable react-hooks/exhaustive-deps */


function Counter(props) {

    const {counter=Function.prototype,count} = props
 

    return <>    
        <div className="button_container"> 
            <button id="+" onClick={(e)=>counter(e)}>+</button>
            <h1>{count}</h1>
            <button id="-" onClick={(e)=>counter(e)}>-</button>
        </div>    
             
       </>
}
export default Counter
