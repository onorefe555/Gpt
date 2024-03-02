import react from "react"
import "./footer.css"
import ailog from "../../assets/ailog.png"
const Footer =()=>{
    return(
        <div className="gpt3__footer section__padding">

            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you know to step into the future before others</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                  <div  className="gpt3__footer-logo">
                    <img src={ailog} alt="logo" />
                    <p>Terrrcord k12 145 DK alkajacob, All right reserve</p>
                  </div>

                  <div className="gpt3__footer-links_div">
                    <h4>links</h4>
                    <p>Overrun</p>
                    <p>Social media</p>
                    <p>Contact Us</p>
                    <p>Country</p>
                  </div>

                  <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms and Condition</p>
                    <p>Social media</p>
                    <p>Privacy links</p>
                    <p>Contact</p>
                  </div>

                  <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Terrrcord k12 145 DK alkajacob</p>
                    <p>+234 816 739 0958</p>
                    <p>onorefemoses@gmail.com</p>
                    <p>onorefemoses@yahoo.com</p>
                  </div>
            </div>

            <div className="gpt3__footer-copyright">
                 <p>GTT5 All right reserve build my Moses Onorefe</p>
            </div>
        </div>
    )
}
export default Footer