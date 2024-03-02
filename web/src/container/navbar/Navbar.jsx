import react from "react"
import "./navbar.css"
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import { useState } from "react";
import ailog from "../../assets/ailog.png"

const Menu =()=>{
    return(
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#whatgpt3">What is GTT-5</a></p>
            <p><a href="#possibility">Open GTT-5</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Libary</a></p>
        </>
    )
}

const Navbar =()=>{
    const [toggleMenu, setTogglemenu] = useState(false)
    return(
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo" >
                    <img src={ailog} alt="gpt3 logo" />
                </div>

                <div className="gpt3__navbar-links-container">
                    <Menu/>
                </div>
            </div>
            
            <div className="gpt3__navbar-sign">
                <p>SignIn</p>
                <button type="button">Sign Up</button>
            </div>
            
            <div className="gpt3__navbar-menu">
            {toggleMenu
                       ? <RiCloseLine color="#fff" size={27} onClick={()=>setTogglemenu(false)  } />
                       : <RiMenu3Line color="#fff" size={27} onClick={()=>setTogglemenu(true) } />
                }

                {toggleMenu && (
                    <div className="gpt3__navbar-menu-container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu/>
                                 <div className="gpt3__navbar-menu_container-links-sign">
                                   <p>SignIn</p>
                                   <button type="button">Sign Up</button>
                               </div>
                        </div>
                    </div>
                     )}
            </div>

        </div>
    )
}
export default Navbar