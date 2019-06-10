import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './Toolbar';

import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTv, faDoorClosed } 
from '@fortawesome/free-solid-svg-icons';

library.add(faTv, faDoorClosed);

export default class Home extends Component {
    constructor(props) {

        super(props);
        this.state = {
          menores : [],
          percentaje: null,
          consultores: [],
        };
    }


    componentDidMount() {
        axios
              .get('https://reqres.in/api/users?page=1&per_page=12')
              .then(response => {

                const consultores = response.data.data
                this.setState({ consultores });
                console.log('consultores', consultores)
                let numFiltered = consultores.filter(consultores => (consultores.first_name + consultores.last_name).length > 12)

                let nu_menores = numFiltered.length
                let total = response.data.total

                this.setState({ percentaje : ((nu_menores*100)/total).toFixed(2) });
                this.setState({ menores : numFiltered });
                
              })
              .catch(error => {
                console.log(error)
                this.errored = true
              })

    }

    render() {
        return (
            <div>
                <Toolbar />
                <div className="container">
                    <div className="card mt-2">
                        
                        <div className="container mt-2 mb-2">
                            <div className="row">
                                <div className="col-sm-6 mr-0" >
                                    <div style={{height:'600px'}} className="card " >
                                        <nav className="navbar navbar-dark bg-primary navbar-expand-md">
                                            <span className="navbar-brand mb-0 h1">Total ({ this.state.consultores.length })</span>
                                        </nav>
                                        <ul className="list-group" style={{overflowY:'auto'}} >
                                            { this.state.consultores.map((consultor, index) => 
                                              
                                                <li href="#" key={index} className="list-group-item list-group-item-action">
                                                  <img height="60px" width="60px" src={consultor.avatar} alt=""></img>
                                                  {" "}
                                                  { consultor.first_name }{" "}
                                                    { consultor.last_name } - 
                                                    { (consultor.first_name + consultor.last_name).length }

                                                </li>
                                            )
                                            }
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className=" col-sm-6 ml-0" >
                                    <div className="card" style={{height:'600px'}}>
                                        <nav className="navbar navbar-dark bg-primary navbar-expand-md">
                                            <span className="navbar-brand mb-0 h1">Nombre y Apellido +12 carácteres ({ this.state.percentaje } %)</span>
                                        </nav>
                                        <ul className="list-group" style={{overflowY:'auto'}} >
                                        { this.state.menores.map((menor, index) => 
                                                <li href="#" key={index} className="list-group-item list-group-item-action">
                                                  <img height="60px" width="60px" src={menor.avatar} alt=""></img>
                                                  {" "}
                                                  { menor.first_name }{" "}
                                                    { menor.last_name } - 
                                                  { (menor.first_name + menor.last_name).length }
                                                </li>
                                            )
                                            }
                                        </ul>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                        

                    </div>
               </div>
            </div>
            
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
