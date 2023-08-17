import { useContext, useEffect,useState } from "react"
import ButtonGroup from "../components/Home/ButtonGroup";
/* eslint-disable react-hooks/exhaustive-deps */


function Home() {

       const number = ['one','two','three']
 

    return <>        
              <ButtonGroup number={number}/>
       </>
}
export default Home
