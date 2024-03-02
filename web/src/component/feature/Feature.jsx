import react from "react"
import "./feature.css"
const Feature =({title, text,message,message2})=>{
    return(
        <div className="gpt3__features-container-feature">
             <div className="gtt5_feature__con">
             <div className="gpt3__features-container__feature-title title__text">
                <div/>
                <h1>{title}</h1>
             </div>
             
             <div className="gpt3__features-container_feature-text title__text">
                <p>{text}</p>
             </div>
             </div>

             <div  className="gpt3__features-container__titles">
                   <div>
                   <h1>{message}</h1>
                   </div>
                     
                     <div>
                     <p>{message2}</p>
                     </div>
             </div>
        </div>
    )
}
export default Feature