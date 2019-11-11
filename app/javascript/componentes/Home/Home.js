import React, {Component} from "react"

class Home extends Component{
    constructor(){
        super()
        this.state={
            modules: [
               {id: 1, title:"", description:"", active:false}
            ]
        }

    }
    render()  {
        return(
            <div>este es mi componente Home</div>
        )
    }

   


}