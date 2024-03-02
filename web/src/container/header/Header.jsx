import react from "react"
import "./header.css"
import acquire from "../../assets/acquire.jpg"
import ai from "../../assets/ai.jpg";

const Header =()=>{
    return(
        <div className="gpt3__header section__padding" id="home">
               <div className="gpt3__header-content">
                  <h1 className="gradient__text">Let's Build Something powerful with Open GTT-5  </h1>
                      <p>Discover the power of GTT-5 generator that save time and
                   effort. Try it and experience magic and unlock your creativity.</p>
                      <div className="gpt3__header-content__input">
                          <input type="email" placeholder="Your Email adress" />
                            <button type="button">Get Started</button>
                      </div>

                      <div className="gpt3__header-content__people">
                           <div className="peple__icon">
                           <img src={acquire} alt="acquire" /><img src={acquire} alt="acquire" /><img src={acquire} alt="acquire" />
                           </div>
                         <p>1,600 people requested Access a visit in the last 24hrs</p>
                      </div>

             </div>

              <div className="gpt3__header-image">
                     <img src={ai} alt="Ai" />
              </div>
        </div>
    )
}
export default Header