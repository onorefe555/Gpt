import react from "react"
import "./whatgpt3.css"
import { Feature } from "../../component"


const Whatgpt3 =()=>{
    return(
        <div className="gpt3__whatgpt3 section__margin " id="whatgpt3">
              <div className=" gpt3__whatgpt3-feature">
              < Feature message="What is GGT-5" message2="Another big game changer for databases in the 1980s was the focus
                 on increasing reliability and access speeds. In 1989, two professors from the University of Michigan
                  at Madison published an article at an ACM associated conference outlining their methods on increasing database performance. The idea was
                 to replicate specific important and often queried information" /> 
             </div>

             <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">The possibility are beyound your imagination</h1>
                <p>Explore The Library</p>
             </div>

             <div className="gpt3__whatgpt3-container">
            
                <Feature title="ChatBox" text="Objects contain data, and code to manipulate that data.
                 The entire set of The 1980s, saw a growth in how data in various databases were handled.."
                  />
               
               <Feature title="KnowledgeBase" text=" This allows for relationships between data to
                 be relation to objects and their attributes and not to individual fields"
                  />
               
                <Feature title="Education" text="Another big game changer for databases in the 1980s
                 was the focus on increasing reliability and access speeds. In 1989, two professors 
                "/>
                
             </div>
              
        </div>
    )
}
export default Whatgpt3