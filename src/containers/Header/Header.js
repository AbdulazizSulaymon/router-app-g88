import "./Header.css";
import React from 'react'
import { Link } from "react-router-dom";

const data = [
    { to: "/", title: "Home" },
    { to: "/about", title: "About" },
    { to: "/dashboard", title: "Dashboard" },
]

const Header = () => {
    return (
        <header className="bg-dark text-white shadow">
            <div className="container py-3 d-flex align-items-center">
                <Link to="/"><img src="logo192.png" className="logo me-3" alt="" /></Link>

                {/* 1-variant */}
                {data.map((value, index) =>
                    <Link to={value.to} className="btn btn-dark me-2" key={value.to}>{value.title}</Link>)}

                {/* 2-variant
                <Link to="/" className="btn btn-dark me-2">Home</Link>
                <Link to="/about" className="btn btn-dark me-2">About</Link>
                <Link to="/dashboard" className="btn btn-dark me-2">Dashboard</Link> */}
            </div>
        </header>
    )
}

export default Header
