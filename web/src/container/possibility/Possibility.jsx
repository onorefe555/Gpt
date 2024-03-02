import react from "react"
import "./possibility.css"
import rethinkavatar from "../../assets/rethinkavatar.png"
const Possibility =()=>{
    return(
        <div className="gpt3__possibility section__padding " id="possibility">
              <div className="gpt3__possibility-image">
                <img src={rethinkavatar} alt="possibilityimg" />
              </div>

              <div className="gpt3__possibility-content">
                <h4>Request early access to get satrted</h4>
                <h1 className="gradient-text">The Possibility are beyound your immagination</h1>
                <p>Structured programming (sometimes known as modular programming) is a programming
paradigm that facilitates the creation of programs with readable code and reusable components.
All modern programming languages support structured programming, but the mechanisms of
support, like the syntax of the programming languages, varies. Where modules or elements of code
can be reused from a library, it may also be possible to build structured code using modules written
in different languages, as long as they can obey a common module interface or application program
interface (API) specification.</p>
                <h4>Request early access to get satrted</h4>
              </div>
        </div>
    )
}
export default Possibility