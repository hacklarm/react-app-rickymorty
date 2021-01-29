
import React, { Component } from 'react';
import '../assets/css/Home.css'
import MainBg from '../assets/img/MainBg.jpg'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="HomeContainer bg-dark rounded">
                <div className="ContainerElement container">

                    <div className="ImgContainer">
                        <img className="img-fluid mt-5 rounded" src={MainBg} alt="Text"></img>
                    </div>

                    <div className="mt-3">
                        <Link to="/characters" className="mr-2">
                            <button className="btn btn-light ms-3"  >Personajes</button >
                        </Link>

                        <Link to="/episodes" className="ms-2">
                            <button className="btn btn-light ms-3"  >Capitulos</button >
                        </Link>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home