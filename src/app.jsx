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
                { id: 1, firstname: "rosaire", lastname: "Kota", biography: "lorem", "avatar":"https://avatars.githubusercontent.com/u/48548004?v=4" },
                { id: 2, firstname: "jules", lastname: "Omba", biography: "lorem", "avatar":""},
                {id:3,firstname:"Marc",lastname:"Kulenda",biography:"lorem", "avater":""}
            ]
        }
    }
    handleDelete= id=>{
                const contactsclone= this.state.contacts.slice();
                const index= contactsclone.findIndex((contactsclone)=>{
                    return contactsclone.id===id;
                });
                contactsclone.splice(index, 1);
                this.setState({contacts: contactsclone});
        }
    handleCreate=()=>{
                const contactsclone= this.state.contacts.slice();
                contactsclone.push({"id":"", "firstname":"", "lastname":"", "biography":"", "avatar":""});
                this.setState({contacts: contactsclone});
    }
    

    render() {
        return <>
        <TopSection/>
         <main className="container row">
                <div className=" small-col-6medium-col-6">1</div>
                <div className=" small-col-6medium-col-6">2</div>
                {/* <Card className="small-col-6 medium-col-6" contacts={this.state.contacts }/>         */}
         </main>
        </>
    }
}
export default App;