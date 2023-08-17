import { useContext, useEffect,useState } from "react"
/* eslint-disable react-hooks/exhaustive-deps */


function ButtonGroup(props) {

    const {number} = props
 

    return <>    
        <div className="button_container"> 
            {number.map(e=>(
                <button>{e}</button>
              ))}
        </div>    
             
       </>
}
export default ButtonGroup
