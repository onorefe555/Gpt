import react from "react"
import "./brand.css"
import {log, star, store, onof, acquire, yahoo} from "./import"
const Brand =()=>{
    return(
        <div className="gpt3__brand section__padding">
             <div>
                <img src={log} alt="" className="log" />
             </div>

             <div>
                <img src={star} alt="" />
             </div>

             <div>
                <img src={store} alt="" />
             </div>

             <div >
                 <img src={acquire} alt="" />
             </div>

             <div className="yahoo">
                   <img src={yahoo} alt="" />
             </div>
        </div>
        
    )
}
export default Brand