import react from "react"
import { Article, Brand, Cta, Feature} from "./component"
import { Blog, Footer, Header, Possibility,Whatgpt3, Navbar, Features} from "./container";
import "./App.css";
const App =()=>{
  return(
    <div className="App ">
      <div className ="gredient__bg">
        <Navbar />
        <Header/>
      </div>
        <Brand/>
        <Whatgpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}
export default App