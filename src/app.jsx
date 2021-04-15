import "./assets/css/App.css";
import "./assets/css/rkota-grid.css";
import Card from "./components/card/card";
import TopSection from "./components/layouts/header";
import React from "react";


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            "contacts": [
                { id: 1, firstname: "rosaire", lastname: "Kota", biography: "lorem" },
                { id: 2, firstname: "jules", lastname: "Omba", biography: "lorem" },
                {id:3,firstname:"Marc",lastname:"Kulenda",biography:"lorem"}
            ]
        }
    }

    render() {
        return <>
        <TopSection/>
         <main className="container row">
                <Card className="medium-col-12" contacts={this.state.contacts }/>        
         </main>
        </>
    }
}
export default App;