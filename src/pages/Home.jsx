import { useContext, useEffect,useState } from "react"
import Counter from "../components/Home/Counter";
/* eslint-disable react-hooks/exhaustive-deps */


function Home() {

       const [count, setCount] = useState(0);
       
       const counter = (e) => {
              if(e.target.id==='+') setCount(count+1)
              if(e.target.id==='-') setCount(count-1)
       }

    return <>        
              <Counter counter={counter} count={count} />
       </>
}
export default Home
