import { useContext, useEffect,useState } from "react"
import Counter from "../components/Home/Counter";
/* eslint-disable react-hooks/exhaustive-deps */


function Home() {

       const [showModalGameSetting, setShowModalGameSetting] = useState(false);
       
       

    return <>        
              <Counter />
       </>
}
export default Home
