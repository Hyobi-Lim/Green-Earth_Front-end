import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    return(
        <>
            <div className='upper-bar'>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                    <div style={{fontWeight:"bold", fontSize:"30px"}}>Green Earth</div>
                </Link>
                <nav className='upper-bar-box'>
                    <button className='upper-bar-item'>
                        <Link to="/selectpage" style={{ textDecoration: "none", color: "black"}}>
                            <div style={{fontWeight:"bold", fontSize:"20px"}}>Main Page</div>
                        </Link>
                    </button>
                    <button className='upper-bar-item' style={{marginLeft:"10px"}}>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                            <div style={{fontWeight:"bold", fontSize:"20px"}}>Log Out</div>
                        </Link>
                    </button>
                </nav>
            </div>
        </>
    )
}