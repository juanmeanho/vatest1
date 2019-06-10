import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Toolbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary navbar-expand-md">
                    <span className="navbar-brand mb-0 h1">
                    <FontAwesomeIcon icon="tv" color="white" size="lg" />{'  '}
                        Vates Test 1</span>
                        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <FontAwesomeIcon icon="door-closed" color="white" size="lg" />{' '}

                            <ul className="navbar-nav">

                                <li className="nav-item active">
                                        {/* <a className="nav-link" href="#">Salir <span className="sr-only">(current)</span></a> */}
                                </li>
                            </ul>
                        </div>
                </nav>
            </div>
        );
    }
}

export default Toolbar;
