import react from "react"
import "./features.css"
import { Feature } from "../../component"
const FeatureData = [
    {
        title: "Improve end distrust instantly",
        text: "from they fine john he gave something amazing to the growth and development of this project",
    },
    {
        title: "Become the tended happy",
        text: "from they fine john he gave something amazing to the growth and development of this project",
    },
    {
        title: "Message of an unlucky happy",
        text: "from they fine john he gave something amazing to the growth and development of this project",
    },
    {
        title: "Really boy law country",
        text: "from they fine john he gave something amazing to the growth and development of this project",
    }
]
const Features =()=>{
    return(
        <div className="gpt3_feature section__padding" id="features">
              <div className="gpt3__features-heading">
                  <h1 className="gradient__text">THE FUTURE IS NOW TODAY YOU JUST HAVE TO REALIZE IT.
                   STEP INTO THE FUTURE TODAY AND MAKE IT HAPPEN</h1>
                   <p>Request Earlier access to get better</p>
              </div>

              <div className="gpt3__features-container">
                     {FeatureData.map((item, index)=>(
                        <Feature title={item.title} text={item.text} key={item.title + index} />
                     )
                     )}
              </div>
        </div>
    )
}
export default Features