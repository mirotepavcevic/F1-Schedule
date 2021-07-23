import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import Constructors from './Constructors';
import Drivers from './Drivers';
import Races from './Races';
import '../css/style.css'
import Home from './Home';


const App = () => {

    return (
        <Router>
            <div className='main'>
                <div className='sidebar'>
                    <img src='./img/praviLogo.jpg' />
                    <ul className='links'>
                        <li className='link'>
                            <Link to='/drivers'>
                                <img src="./img/helmet.png" />
                                <p>Drivers</p>
                            </Link>
                        </li>
                        <li className='link'>
                            <Link to='/constructors'>
                                <img src="./img/timovi1.png" />
                                <p>Constructors</p>
                            </Link>
                        </li>
                        <li className='link'>
                            <Link to='/races'>
                                <img src="./img/checkered-flag.png" />
                                <p>Races</p>
                            </Link>
                        </li>
                        <li className='link'>
                            <Link to='/'>
                                <img src="./img/home.png" />
                                <p>Home</p>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className='content' >
                    <Route path='/' exact component={Home} />
                    <Route path='/drivers' exact component={Drivers} />
                    <Route path='/constructors' exact component={Constructors} />
                    <Route path='/races' exact component={Races} />
                </div>
            </div>
        </Router>
    )

}

export default App;




