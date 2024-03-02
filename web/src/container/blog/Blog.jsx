import react from "react"
import "./blog.css"
import { blog1, blog2, blog3, blog4, blog5, ai } from "../../container/blog/import"

import { Article } from "../../component"


const Blogger=({text})=>{
    return(
        <div>
            <p>{text}</p>
        </div>
    )
}

const Blog=()=>{
    return(
        <div  className="gpt3__blog section__padding" id="blog">
               <div className="gpt3__heading">
                   <h1 className="gradient__text">A lot is happening. We are blogging</h1>
               </div>

               <div className="gpt3__blog-container">
                  <div className="gpt3__blog-container__groupA">
                      <Article imgURL={blog1} date="19th, April 2021" title="GTT5 and open AI is the future. Let us explore how it is?"/>
                  </div>

                  <div className="gpt3__blog-container__groupB">
                  < Article imgURL={blog2} date="26th, September 2021" title="GTT5 and open AI is the future. Let us explore how it is?" />
                  <Article imgURL={blog3} date="29th, November 2021" title="GTT5 and open AI is the future. Let us explore how it is?"/>
                  <Article imgURL={blog4} date="26th, November 2021" title="GTT5 and open AI is the future. Let us explore how it is?"/>
                  <Article imgURL={blog5} date="25th, April 2021" title="GTT5 and open AI is the future. Let us explore how it is?"/>
                  </div>
               </div>
        </div>
    )
}
export default Blog