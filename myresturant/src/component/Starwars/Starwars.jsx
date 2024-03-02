import React from "react";

class FilmItemRow extends React.Component{
    render(){
        return(
            <div>
                <li>
                    <a href="somewere.html">SomeWhere</a>
                </li>
            </div>
        )
    }
}

class Starwars extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loadCharacter : false,
            name : null,
            height: null,
            homeword: null,
            film: []
        }
    }
    getNewCharacter(){
        const getRanDOM = Math.round(Math.random()*81)
        console.log("Currently working on setstate")
              const URL = 'http://swapi.dev/api/planets/1/'
              fetch(URL)
              .then (respond => respond.json())
              .then(data =>{
                console.log(data)
                this.setState({
                    name : data.name,
                    rotation_period:data.rotation_period,
                    orbital_period : data.orbital_period,
                    diameter : data.diameter,
                    climate : data.climate,
                    homeword : "C:\Users\Admin\Documents\gtp\Abiola\dash.html",
                    film : ["Item1","Item2", "Item3", "Item4"],
                    loadCharacter : true,
                   })
              })       
    }
    render(){
        const Movies = this.state.film.map((url, l) => {
            return <FilmItemRow/>
        })
        return(
            <div>
                {
                this.state.loadCharacter && 
                    <div>
                     <h3>{this.state.name}</h3>
                     <p>{this.state.rotation_period}</p>
                     <p>{this.state.diameter}</p>
                     <p>{this.state.climate}</p>
                     <p>Home World : {this.state.homeword}</p>
                     <ul>{Movies}</ul>
                    </div>
                }
                 <button type="button" onClick={()=>this.getNewCharacter()}>Randomise Character</button>
            </div>
        )
    }
}
export default Starwars