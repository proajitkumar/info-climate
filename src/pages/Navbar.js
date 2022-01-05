import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar(props) {
    

    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid mx-4">
                <Link className="navbar-brand text-orange fs-3 fw-bold" to="/">Info Climate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-2">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <input className="form-control me-2 shadow-none " id="search" type="search" placeholder="Search" aria-label="Search" onKeyUp={(e)=>{e.key==="Enter" && document.getElementById('find-btn').click()}}/>
                    <Link to='/find' id='find-btn' onClick={()=>{props.searchCity(document.getElementById('search').value)}}><button className="btn bg-orange shadow-none">Search</button></Link>
                </div>
                </div>
            </div>
            </nav>   
        </>
    )
}
